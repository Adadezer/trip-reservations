# Trip Reservations

## 🌎 O que é a Aplicação
É um site de reserva de viagens desenvolvido durante a semana de programação "Fullstack Week", nele é possível buscar uma viagem, seja por localização, data, ou orçamento. Ver detalhes dessa viagem com fotos, destaques, preço por noite, data e hóspedes. 

Na aplicação também é possível reservar viagens de hotel, fazendas, e pousadas, escolhendo datas e valores, cancelar a viagem escolhida, simular o pagamento da viagem e logar com sua própria conta do google.

## 💻 Tecnologias Utilizadas
- Typescript
- React
- Nextjs
- Talwind css
- PrismaORM
- Postgresql
- Stripe
- NextAuth

## ⚙️ Como Utilizar
Demonstração da aplicação
![](https://github.com/Adadezer/trip-reservations/blob/main/demo_TripReservations.gif)

 - Você pode acessar a aplicação [clicando nesse link.](https://trip-reservations.vercel.app/) 

Obs¹: Caso tenho problemas em fazer login, ou utilizar o site, dê uma olhada nas `📌 Considerações` no final da página.

Obs²: Clique com o botão direito do mouse, depois em `abrir em uma nova guia`, ou segure `Ctrl` e clique no link para abrir a página em outra guia, e não sair da página deste repositório.

 - Faça login para reservar uma viagem.
 
 - Na hora de pagar a viagem escolhida utilize esse número de cartão `4242 4242 4242 4242`, esse é o número do cartão de teste, com ele você não será cobrado de nada (não se preocupe rsrs), o resto das informações podem ser fictícias.

## 🏠 Executando localmente
Caso queira clonar o repositório e rodar ele localmente, siga esses passos:

 1. Abra o terminal, clone o repositório do github e entre na pasta do projeto:
	 - `git clone https://github.com/Adadezer/trip-reservations.git` ou `git clone git@github.com:Adadezer/trip-reservations.git`
	 - `cd trip-reservations`
	 
 2. Instale as dependências do projeto:
	 - `npm install`

 3.  A aplicação usa o postgresql como banco de dados, crie um banco de dados com qualquer nome ('tripReservations' por exemplo) no postgresql.
 
 4. Configure a variável de ambiente:
	-  Com o banco de dados criado, crie na pasta raiz do projeto um arquivo `.env` e coloque as informações do seu banco de dados na variável DATABASE_URL:
	> DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
	
	- Na pasta existe um arquivo chamado `.env.example` com um exemplo de como deve ser preenchido.

 5. Execute o comando `npx prisma migrate reset` para o banco de dados ser populado automaticamente com informações de locais de viagens fictícios. Logo após executar o comando, uma mensagem de confirmação será exibida, dizendo que o banco de dados será resetado e as informações contidas nele serão perdidas, escolha sim para continuar.
Obs: Como o banco acabou de ser criado e está vazio, não tem problema realizar esse passo, caso o comando seja executado novamente, os dados serão perdidos.

6. Execute o projeto:
	- `npm run dev`

7. No terminal aparecerá a url: `http://localhost:3000`, clique nela ou digite a url no navegador e espere a página carregar.

## 📌 Considerações

- O projeto está hospedado em um servidor gratuito, e tem um limite de tempo onde ele fica online, caso tenha problemas para logar, ou navegar entre as páginas, rode o projeto localmente, ou me mande uma mensagem no [linkedin](https://www.linkedin.com/in/adadezer-iwazaki/), ou no email `adadezer@gmail.com` e terei o maior prazer em restaurá-lo para você poder vê-lo funcionando.

- Assim como em qualquer site, as viagens tem data para serem reservadas, caso não consiga fazer uma busca ou reservar uma viagem, faça a reserva escolhendo uma data no mês 12/23. Ou me mande uma mensagem no [linkedin](https://www.linkedin.com/in/adadezer-iwazaki/), ou no email `adadezer@gmail.com` que terei o maior prazer em mudar as datas para você poder reservar suas viagens.

 - Caso queira ver o protótipo no figma [clique aqui.](https://www.figma.com/file/gWRHt9TxdTLQxo5Np7yAaq/FSW-Project-%5BLive%5D?type=design&node-id=0:1&mode=design&t=ohQv59Gxt1KBkEBt-1)
 Obs: Clique com o botão direito do mouse, depois em `abrir em uma nova guia`, ou segure `Ctrl` e clique no link para abrir a página em outra guia, e não sair da página deste repositório.
 
 - Caso queira visualizar o diagrama do sistema de reservas que se encontra na pasta raiz do projeto, ele pode ser aberto com no site `https://app.diagrams.net/`

## 🔗 Links
<span >
  <a href="mailto: adadezer@gmail.com"> <img width="110em" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>

  <a href="https://www.linkedin.com/in/adadezer-iwazaki/" target="_blank"><img width="110em" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</span>
