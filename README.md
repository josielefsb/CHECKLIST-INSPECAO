| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF01 | O sistema deve listar as máquinas cadastradas para o operador selecionar a máquina desejada. | Alta | Ao selecionar uma máquina cadastrada, o sistema deve abrir a próxima etapa do checklist. |
| RF02 | O sistema deve preencher automaticamente a data e o horário exatos em que o checklist foi iniciado, sem permitir alteração pelo operador. | Alta | A data e o horário devem ser preenchidos automaticamente e permanecer bloqueados para edição. |
| RF03 | O sistema deve exibir as opções do checklist correspondentes à máquina selecionada. | Alta | Após a seleção da máquina, o sistema deve apresentar os itens de inspeção vinculados àquela máquina. |
| RF04 | O sistema deve permitir que o operador informe a situação de cada item do checklist. | Alta | O operador deve conseguir registrar uma situação para cada item apresentado. |
| RF05 | O sistema deve permitir que o operador registre o item como conforme ou não conforme. | Alta | O operador deve conseguir selecionar uma das opções disponíveis para cada item. |
| RF06 | O sistema deve permitir que o operador registre uma observação para os itens identificados como não conformes. | Alta | Ao selecionar um item como não conforme, o sistema deve disponibilizar um campo para registro da observação. |
| RF07 | O sistema deve permitir o registro de evidências relacionadas aos itens não conformes. | Média | O operador deve conseguir anexar uma evidência ao item não conforme. |
| RF08 | O sistema deve permitir o registro de fotos durante a inspeção. | Média | O operador deve conseguir adicionar uma foto vinculada ao item correspondente. |
| RF09 | O sistema deve identificar os itens que não foram preenchidos antes da finalização do checklist. | Alta | Ao tentar finalizar o checklist com itens pendentes, o sistema deve informar quais itens precisam ser preenchidos. |
| RF10 | O sistema deve impedir a finalização do checklist enquanto houver itens obrigatórios sem preenchimento. | Alta | O sistema deve bloquear a finalização até que todos os itens obrigatórios sejam respondidos. |
| RF11 | O sistema deve permitir que o operador revise as informações preenchidas antes de finalizar o checklist. | Alta | Antes da finalização, o sistema deve apresentar os dados registrados para conferência. |
| RF12 | O sistema deve permitir que o operador finalize o checklist após o preenchimento dos itens obrigatórios. | Alta | Ao finalizar um checklist completo, o sistema deve registrar a conclusão da inspeção. |
| RF13 | O sistema deve registrar automaticamente o operador responsável pela realização do checklist. | Alta | O checklist finalizado deve apresentar a identificação do operador responsável pela inspeção. |
| RF14 | O sistema deve registrar a data e o horário de finalização do checklist. | Alta | Após a finalização, o sistema deve armazenar automaticamente a data e o horário de conclusão. |
| RF15 | O sistema deve gerar um registro da inspeção realizada para a máquina selecionada. | Alta | Após a finalização, deve existir um registro contendo a máquina, operador, data, horário e respostas do checklist. |
| RF16 | O sistema deve permitir a consulta dos checklists realizados. | Média | O usuário autorizado deve conseguir visualizar os registros de inspeções realizadas. |
| RF17 | O sistema deve permitir consultar o histórico de inspeções de uma máquina. | Média | Ao selecionar uma máquina, o sistema deve apresentar os checklists realizados anteriormente para ela. |
| RF18 | O sistema deve destacar os itens identificados como não conformes. | Alta | Os itens registrados como não conformes devem ser identificados visualmente no checklist e no histórico. |
| RF19 | O sistema deve encaminhar as não conformidades registradas para acompanhamento da manutenção. | Alta | Após a identificação de uma não conformidade, o registro deve ficar disponível para acompanhamento pela manutenção. |
| RF20 | O sistema deve permitir que a manutenção registre a situação da não conformidade. | Alta | A manutenção deve conseguir registrar a situação do atendimento da ocorrência. |
| RF21 | O sistema deve permitir que a manutenção registre a solução aplicada à não conformidade. | Alta | O responsável pela manutenção deve conseguir registrar a solução realizada. |
| RF22 | O sistema deve registrar a data e o horário do atendimento da não conformidade. | Alta | Ao registrar o atendimento, o sistema deve armazenar automaticamente a data e o horário da ação. |
| RF23 | O sistema deve permitir que o supervisor acompanhe os checklists realizados pelos operadores. | Alta | O supervisor deve conseguir visualizar os checklists realizados e suas respectivas situações. |
| RF24 | O sistema deve permitir que o supervisor consulte as não conformidades identificadas nas inspeções. | Alta | O supervisor deve conseguir visualizar as não conformidades registradas e seu status de atendimento. |
| RF25 | O sistema deve permitir a emissão de um relatório da inspeção realizada. | Média | O usuário autorizado deve conseguir gerar um relatório contendo os dados registrados no checklist. |
| RF26 | O sistema deve manter o histórico dos checklists realizados para cada máquina. | Alta | Os registros finalizados devem permanecer disponíveis para consulta posterior. |
| RF27 | O sistema deve controlar o acesso às funcionalidades de acordo com o perfil do usuário. | Alta | O operador, supervisor e manutenção devem visualizar somente as funcionalidades permitidas para seus respectivos perfis. |
| RF28 | O sistema deve permitir o cadastro e a atualização das máquinas que poderão ser selecionadas no checklist. | Alta | Um usuário autorizado deve conseguir cadastrar, editar e inativar máquinas. |
| RF29 | O sistema deve permitir o cadastro dos itens que compõem o checklist de cada máquina. | Alta | Um usuário autorizado deve conseguir cadastrar e atualizar os itens de inspeção vinculados às máquinas. |
| RF30 | O sistema deve permitir a configuração dos itens obrigatórios do checklist. | Média | Um usuário autorizado deve conseguir definir quais itens devem obrigatoriamente ser respondidos. |

## Requisitos Não Funcionais

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RNF01 | O sistema deve apresentar as telas do checklist de forma simples e intuitiva. | Alta | O operador deve conseguir iniciar e preencher um checklist seguindo o fluxo apresentado na tela. |
| RNF02 | O sistema deve apresentar as informações do checklist de forma adequada para utilização em dispositivos móveis. | Alta | O checklist deve ser exibido corretamente em celular ou tablet, sem rolagem horizontal. |
| RNF03 | O sistema deve responder às ações do usuário em até 3 segundos em condições normais de utilização. | Alta | As principais ações do sistema devem apresentar resposta em até 3 segundos. |
| RNF04 | O sistema deve garantir a segurança das informações registradas nos checklists. | Alta | Os dados dos checklists devem ser acessíveis somente a usuários autorizados. |
| RNF05 | O sistema deve utilizar autenticação para controlar o acesso dos usuários. | Alta | O usuário deve informar credenciais válidas para acessar o sistema. |
| RNF06 | O sistema deve controlar as permissões de acesso conforme o perfil do usuário. | Alta | Um usuário não deve conseguir acessar funcionalidades não autorizadas para seu perfil. |
| RNF07 | O sistema deve manter a integridade dos registros dos checklists após sua finalização. | Alta | Um checklist finalizado não deve ter seus dados originais alterados sem autorização e registro da alteração. |
| RNF08 | O sistema deve registrar data, horário e usuário responsável pelas ações relevantes realizadas no sistema. | Alta | As ações definidas como rastreáveis devem possuir registro de usuário, data e horário. |
| RNF09 | O sistema deve manter o histórico dos registros de inspeção sem perda de informações. | Alta | Um checklist finalizado deve permanecer disponível para consulta posteriormente. |
| RNF10 | O sistema deve realizar cópias de segurança periódicas dos dados armazenados. | Alta | Deve existir uma rotina de backup configurada e os dados devem poder ser recuperados a partir de uma cópia válida. |
| RNF11 | O sistema deve apresentar mensagens claras ao usuário quando ocorrer um erro durante a utilização. | Média | Quando ocorrer uma falha, o sistema deve apresentar uma mensagem informando o problema e, quando aplicável, a ação necessária. |
| RNF12 | O sistema deve impedir a perda dos dados já preenchidos quando ocorrer uma falha de comunicação durante o preenchimento do checklist. | Alta | Após uma interrupção de comunicação, os dados já registrados devem permanecer disponíveis para continuidade ou recuperação. |
| RNF13 | O sistema deve garantir a disponibilidade dos dados dos checklists para os usuários autorizados. | Alta | Um checklist finalizado deve permanecer acessível aos usuários autorizados durante a consulta. |
| RNF14 | O sistema deve utilizar conexão segura para transmissão dos dados entre o dispositivo do usuário e o sistema. | Alta | Os dados transmitidos pelo sistema devem utilizar protocolo de comunicação seguro. |
| RNF15 | O sistema deve ser compatível com os navegadores e dispositivos definidos pela empresa. | Média | O sistema deve funcionar corretamente nos dispositivos e navegadores homologados pela empresa. |
| RNF16 | O sistema deve permitir a expansão da quantidade de máquinas, usuários e registros sem necessidade de alteração estrutural do sistema. | Média | O sistema deve permitir o crescimento do volume de dados dentro dos limites de capacidade definidos para o projeto. |
| RNF17 | O sistema deve preservar os registros de inspeção pelo período definido pela empresa. | Alta | Os registros devem permanecer armazenados e disponíveis durante todo o período estabelecido. |
| RNF18 | O sistema deve utilizar o horário oficial definido pela empresa para registrar as datas e horários das inspeções e demais eventos. | Alta | Os registros de data e horário devem utilizar o mesmo fuso horário configurado para a empresa. |
| RNF19 | O sistema deve garantir que cada checklist possua um identificador único. | Alta | Cada checklist realizado deve possuir um identificador exclusivo que permita sua localização e rastreamento. |
| RNF20 | O sistema deve permitir a recuperação dos dados após uma falha do sistema, conforme a política de backup definida pela empresa. | Alta | Após uma falha, os dados recuperáveis devem poder ser restaurados conforme o procedimento definido. |

## Configuração Supabase

1. Crie um projeto Supabase e execute [`supabase/schema.sql`](supabase/schema.sql) no SQL Editor.
2. Copie a Project URL e a chave publishable (ou anon) para [`supabase/config.js`](supabase/config.js). A chave `service_role` nunca deve ser usada no navegador.
3. Sirva os arquivos por HTTPS ou em localhost e abra `index.html`. A biblioteca `supabase-js` é carregada pelo CDN.
4. Crie usuários pelo cadastro da tela ou pelo Supabase Auth. O trigger do schema cria o perfil como `colaborador`. Para conceder `gerencia`, `supervisor` ou `manutencao`, um administrador deve atualizar `public.perfis.perfil` por canal administrativo confiável.

O login é feito pelo Supabase Auth. Veículos, operadores, inspeções e respostas são lidos e gravados nas tabelas correspondentes. O navegador mantém cópias locais para rascunho e funcionamento temporário da interface; a sincronização requer conexão e sessão autenticada. A autorização final é aplicada pelas políticas RLS do schema.

As fotos ainda não são enviadas ao Supabase Storage nem registradas em `anexos_inspecao`; precisam de bucket privado e fluxo de upload para persistirem entre dispositivos. O acompanhamento de manutenção também depende de criar `chamados_manutencao` e `eventos_manutencao` conforme o papel previsto no schema. O schema só permite que equipe interna crie chamados, então esse fluxo deve ser implementado com uma função/RPC confiável ou por ação da equipe interna.

## Versão demonstrativa

Abra a aplicação por HTTPS ou localhost, após configurar o projeto Supabase. A interface está em `index.html`, os estilos em `styles.css` e a lógica em `script.js`. O checklist registra abertura, operador, veículo, respostas, comentários e aptidão; apresenta itens para carros/utilitários, caminhões/ônibus e máquinas/equipamentos. As etapas exigem respostas e observações de não conformidade antes de avançar. Após finalizar, o registro é salvo no histórico e o formulário é limpo para o próximo checklist. O histórico permite filtrar relatórios por veículo, item de inspeção e resultado, além de imprimir os resultados filtrados. Veículos e operadores são carregados de seus cadastros no Supabase; veículos são administrados por gerência.

Os itens são uma base geral e devem ser adequados aos procedimentos do fabricante, às regras aplicáveis e às condições da operação. O Supabase não configura sozinho política de backup; configure retenção e recuperação no projeto conforme a necessidade da empresa.
