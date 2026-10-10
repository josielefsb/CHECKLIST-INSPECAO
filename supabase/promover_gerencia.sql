-- Execute no SQL Editor do Supabase para promover o usuário a gerência.
-- Gerência é o perfil mais abrangente definido em schema.sql e também conta
-- como equipe interna nas políticas RLS.
do $$
declare
  usuario_id uuid;
begin
  select id
    into usuario_id
    from auth.users
   where lower(email) = lower('josianebritojti@gmail.com');

  if usuario_id is null then
    raise exception 'Usuário josianebritojti@gmail.com não encontrado em auth.users';
  end if;

  insert into public.perfis (id, nome_exibicao, perfil, ativo)
  select id,
         coalesce(raw_user_meta_data ->> 'nome_exibicao', split_part(email, '@', 1)),
         'gerencia',
         true
    from auth.users
   where id = usuario_id
  on conflict (id) do update
    set perfil = 'gerencia',
        ativo = true;
end;
$$;

-- Confirme a promoção.
select p.id, u.email, p.nome_exibicao, p.perfil, p.ativo
  from public.perfis p
  join auth.users u on u.id = p.id
 where lower(u.email) = lower('josianebritojti@gmail.com');
