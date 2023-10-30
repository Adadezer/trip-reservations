# TripReservations

## Figma: https://www.figma.com/file/gWRHt9TxdTLQxo5Np7yAaq/FSW-Project-%5BLive%5D?type=design&node-id=0%3A1&mode=design&t=ohQv59Gxt1KBkEBt-1

### O diagrama do sistema de reservas pode ser aberto com o site `https://app.diagrams.net/`

#### https://github.com/felipemotarocha/fullstackweek-trips

#### caso não consiga fazer uma busca ou reservar uma viagem:
a aplicação foi desenvolvida para novembro de 2023, caso você esteja testando o código depois de 11/23
faça o seguinte:
-Digite no terminal o comando `npx prisma studio`, na tabela que aparecer clique na opção `trip`. Irá aparecer todas as viagens no banco, exclua as data antigas selecionando-as e clicando no botão deletar acima da tabela
encontre o arquivo `seed.ts` em `src/lib/seed.ts`.
-Mude o mês e ano das datas iniciais e finais em todas as viagens para o mês e ano que você está
-Digite no terminal o comando `npx prisma db seed`, esse comando irá gerar novas viagens no banco de dados
