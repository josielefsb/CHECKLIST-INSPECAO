-- Esquema inicial para Supabase/PostgreSQL.
-- Execute no SQL Editor de um projeto novo. Identidades e senhas ficam no Supabase Auth.
create extension if not exists pgcrypto;

create type public.perfil_aplicacao as enum ('gerencia', 'colaborador', 'manutencao', 'supervisor');
create type public.tipo_veiculo as enum ('carro', 'caminhao', 'maquina');
create type public.situacao_inspecao as enum ('rascunho', 'concluida');
create type public.situacao_resposta as enum ('ok', 'nao_conforme', 'na');
create type public.situacao_aptidao as enum ('apto', 'nao_apto', 'pendente');
create type public.situacao_manutencao as enum ('aberto', 'em_andamento', 'resolvido', 'descartado');

create table public.perfis (
  id uuid primary key references auth.users(id) on delete cascade,
  nome_exibicao text not null,
  perfil public.perfil_aplicacao not null default 'colaborador',
  ativo boolean not null default true,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create table public.veiculos (
  id uuid primary key default gen_random_uuid(),
  tipo public.tipo_veiculo not null,
  placa text,
  numero_frota text,
  numero_serie text,
  marca_modelo text,
  cor text,
  ativo boolean not null default true,
  criado_por uuid references public.perfis(id) on delete set null,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  check (nullif(trim(placa), '') is not null or nullif(trim(numero_frota), '') is not null or nullif(trim(numero_serie), '') is not null)
);
create unique index vehicles_plate_unique on public.veiculos (upper(trim(placa))) where placa is not null and trim(placa) <> '';
create unique index vehicles_fleet_unique on public.veiculos (upper(trim(numero_frota))) where numero_frota is not null and trim(numero_frota) <> '';
create unique index vehicles_serial_unique on public.veiculos (upper(trim(numero_serie))) where numero_serie is not null and trim(numero_serie) <> '';

create table public.operadores (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  ativo boolean not null default true,
  criado_por uuid references public.perfis(id) on delete set null,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);
create unique index operadores_nome_unico on public.operadores (lower(trim(nome)));

create table public.inspecoes (
  id uuid primary key default gen_random_uuid(),
  numero_inspecao text not null unique default ('INS-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 12))),
  situacao public.situacao_inspecao not null default 'rascunho',
  veiculo_id uuid references public.veiculos(id) on delete set null,
  dados_veiculo jsonb not null default '{}'::jsonb,
  operador_usuario_id uuid references public.perfis(id) on delete set null,
  nome_operador text not null,
  aberto_em timestamptz not null default now(),
  finalizado_em timestamptz,
  editado_em timestamptz,
  leitura numeric(14,2),
  unidade_leitura text check (unidade_leitura is null or unidade_leitura in ('km', 'horas')),
  local_inspecao text,
  comentario_geral text,
  aptidao public.situacao_aptidao not null default 'pendente',
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  check ((situacao = 'rascunho' and finalizado_em is null) or (situacao = 'concluida' and finalizado_em is not null))
);
create index historico_inspecoes_veiculo on public.inspecoes (veiculo_id, aberto_em desc);
create index historico_inspecoes_operador on public.inspecoes (operador_usuario_id, aberto_em desc);
create index inspecoes_por_situacao_data on public.inspecoes (situacao, aberto_em desc);

-- Snapshot dos itens e rótulos preserva a definição que vigorava na inspeção.
create table public.itens_inspecao (
  id uuid primary key default gen_random_uuid(),
  inspecao_id uuid not null references public.inspecoes(id) on delete cascade,
  codigo_item text not null,
  titulo_secao text not null,
  descricao_item text not null,
  essencial boolean not null default false,
  obrigatorio boolean not null default true,
  ordem integer not null default 0,
  resposta public.situacao_resposta,
  observacao text,
  respondido_em timestamptz,
  unique (inspecao_id, codigo_item),
  check (resposta <> 'nao_conforme' or nullif(trim(observacao), '') is not null)
);
create index itens_inspecao_nao_conformes on public.itens_inspecao (inspecao_id) where resposta = 'nao_conforme';

-- Evidências binárias no Storage privado; esta tabela guarda somente metadados.
create table public.anexos_inspecao (
  id uuid primary key default gen_random_uuid(),
  item_inspecao_id uuid not null references public.itens_inspecao(id) on delete cascade,
  caminho_armazenamento text not null unique,
  nome_arquivo text not null,
  tipo_mime text not null,
  tamanho_bytes bigint not null check (tamanho_bytes >= 0),
  enviado_por uuid references public.perfis(id) on delete set null,
  criado_em timestamptz not null default now()
);
create index anexos_por_item on public.anexos_inspecao (item_inspecao_id);

create table public.chamados_manutencao (
  id uuid primary key default gen_random_uuid(),
  item_inspecao_id uuid not null unique references public.itens_inspecao(id) on delete cascade,
  situacao public.situacao_manutencao not null default 'aberto',
  atribuido_a uuid references public.perfis(id) on delete set null,
  solucao text,
  aberto_em timestamptz not null default now(),
  resolvido_em timestamptz,
  atualizado_por uuid references public.perfis(id) on delete set null,
  atualizado_em timestamptz not null default now(),
  check ((situacao = 'resolvido' and resolvido_em is not null and nullif(trim(solucao), '') is not null) or situacao <> 'resolvido')
);
create index fila_chamados_manutencao on public.chamados_manutencao (situacao, aberto_em desc);

create table public.eventos_manutencao (
  id uuid primary key default gen_random_uuid(),
  chamado_id uuid not null references public.chamados_manutencao(id) on delete cascade,
  responsavel_id uuid references public.perfis(id) on delete set null,
  situacao_anterior public.situacao_manutencao,
  situacao_nova public.situacao_manutencao not null,
  observacao text,
  solucao text,
  criado_em timestamptz not null default now()
);
create index eventos_por_chamado on public.eventos_manutencao (chamado_id, criado_em);

create or replace function public.perfil_atual()
returns public.perfil_aplicacao language sql stable security definer set search_path = ''
as $$ select perfil from public.perfis where id = (select auth.uid()) and ativo $$;
create or replace function public.eh_gerente()
returns boolean language sql stable security definer set search_path = ''
as $$ select coalesce(public.perfil_atual() = 'gerencia', false) $$;
create or replace function public.eh_equipe_interna()
returns boolean language sql stable security definer set search_path = ''
as $$ select coalesce(public.perfil_atual() in ('gerencia', 'supervisor', 'manutencao'), false) $$;
create or replace function public.atualizar_data_modificacao()
returns trigger language plpgsql set search_path = '' as $$
begin new.atualizado_em = now(); return new; end $$;

create trigger perfis_atualizar_data before update on public.perfis for each row execute function public.atualizar_data_modificacao();
create trigger veiculos_atualizar_data before update on public.veiculos for each row execute function public.atualizar_data_modificacao();
create trigger operadores_atualizar_data before update on public.operadores for each row execute function public.atualizar_data_modificacao();
create trigger inspecoes_atualizar_data before update on public.inspecoes for each row execute function public.atualizar_data_modificacao();
create trigger chamados_atualizar_data before update on public.chamados_manutencao for each row execute function public.atualizar_data_modificacao();

-- Usuário novo começa como colaborador. Elevação a gerente deve ser feita
-- por processo administrativo confiável, nunca por metadado enviado pelo cliente.
create or replace function public.tratar_novo_usuario()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.perfis (id, nome_exibicao, perfil)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'nome_exibicao', split_part(new.email, '@', 1)), 'colaborador');
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.tratar_novo_usuario();

alter table public.perfis enable row level security;
alter table public.veiculos enable row level security;
alter table public.operadores enable row level security;
alter table public.inspecoes enable row level security;
alter table public.itens_inspecao enable row level security;
alter table public.anexos_inspecao enable row level security;
alter table public.chamados_manutencao enable row level security;
alter table public.eventos_manutencao enable row level security;

create policy "read own profile or staff perfis" on public.perfis for select to authenticated using (id = (select auth.uid()) or public.eh_equipe_interna());
create policy "managers update perfis" on public.perfis for update to authenticated using (public.eh_gerente()) with check (public.eh_gerente());
create policy "authenticated read veiculos" on public.veiculos for select to authenticated using (true);
create policy "managers insert veiculos" on public.veiculos for insert to authenticated with check (public.eh_gerente());
create policy "managers update veiculos" on public.veiculos for update to authenticated using (public.eh_gerente()) with check (public.eh_gerente());
create policy "managers delete veiculos" on public.veiculos for delete to authenticated using (public.eh_gerente());
create policy "authenticated read operadores" on public.operadores for select to authenticated using (true);
create policy "authenticated create operadores" on public.operadores for insert to authenticated with check (criado_por = (select auth.uid()));
create policy "managers update operadores" on public.operadores for update to authenticated using (public.eh_gerente()) with check (public.eh_gerente());
create policy "users read own inspecoes and staff read all" on public.inspecoes for select to authenticated using (operador_usuario_id = (select auth.uid()) or public.eh_equipe_interna());
create policy "users create own inspecoes" on public.inspecoes for insert to authenticated with check (operador_usuario_id = (select auth.uid()));
create policy "owners edit drafts and staff manage inspecoes" on public.inspecoes for update to authenticated
using ((operador_usuario_id = (select auth.uid()) and situacao = 'rascunho') or public.eh_equipe_interna())
with check ((operador_usuario_id = (select auth.uid()) and situacao in ('rascunho', 'concluida')) or public.eh_equipe_interna());
create policy "managers delete inspecoes" on public.inspecoes for delete to authenticated using (public.eh_gerente());
create policy "read items with visible inspection" on public.itens_inspecao for select to authenticated using (exists (select 1 from public.inspecoes i where i.id = inspecao_id));
create policy "write items on own rascunho or staff" on public.itens_inspecao for all to authenticated
using (exists (select 1 from public.inspecoes i where i.id = inspecao_id and ((i.operador_usuario_id = (select auth.uid()) and i.situacao = 'rascunho') or public.eh_equipe_interna())))
with check (exists (select 1 from public.inspecoes i where i.id = inspecao_id and ((i.operador_usuario_id = (select auth.uid()) and i.situacao = 'rascunho') or public.eh_equipe_interna())));
create policy "read attachments with visible inspection" on public.anexos_inspecao for select to authenticated
using (exists (select 1 from public.itens_inspecao ii join public.inspecoes i on i.id = ii.inspecao_id where ii.id = item_inspecao_id));
create policy "upload attachments on own rascunho or staff" on public.anexos_inspecao for insert to authenticated
with check (enviado_por = (select auth.uid()) and exists (select 1 from public.itens_inspecao ii join public.inspecoes i on i.id = ii.inspecao_id where ii.id = item_inspecao_id and ((i.operador_usuario_id = (select auth.uid()) and i.situacao = 'rascunho') or public.eh_equipe_interna())));
create policy "managers delete attachment metadata" on public.anexos_inspecao for delete to authenticated using (public.eh_gerente());
create policy "staff read manutencao cases" on public.chamados_manutencao for select to authenticated using (public.eh_equipe_interna());
create policy "staff create manutencao cases" on public.chamados_manutencao for insert to authenticated with check (public.eh_equipe_interna());
create policy "staff update manutencao cases" on public.chamados_manutencao for update to authenticated using (public.eh_equipe_interna()) with check (public.eh_equipe_interna());
create policy "staff read manutencao events" on public.eventos_manutencao for select to authenticated using (public.eh_equipe_interna());
create policy "staff create manutencao events" on public.eventos_manutencao for insert to authenticated with check (public.eh_equipe_interna() and responsavel_id = (select auth.uid()));

grant usage on schema public to authenticated;
grant select, insert, update, delete on public.perfis, public.veiculos, public.operadores, public.inspecoes, public.itens_inspecao, public.anexos_inspecao, public.chamados_manutencao, public.eventos_manutencao to authenticated;
