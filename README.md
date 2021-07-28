# Api_Pub-Client

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Solução](#tabelaConteudo)
   * [Pré-Requisitos e Instalação](#instalacao)
   * [PostMan](#comoUsar)
      * [GET](#get)
      * [GET/ID](#getId)
      * [POST](#post)
      * [DELETE](#delete)
      * [PUT](#put)
   * [Tests Unitários](#testes)
   * [Tecnologias Usadas](#tecnologias)
<!--te-->

<div id="Sobre">
</div>
<h1 align="center">API RESILIA PUB</h1>


<h3>Projeto final do modulo 4 com o intuito de criar uma API restful aplicando as quatro operações 
básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores para a administração de um estabelecimento. </h3>


✅ CREATE <br/>
✅ READ <br/>
✅ UPDATE  <br/>
✅ DELETE <br/>

<br/><br/><br/>

<h3> Definimos um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada
para um dado recurso seguindo o protocolo HTTP. </h3>


✅ GET - O método solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.<br/>
✅ POST - O método é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso.<br/>
✅ DELETE - O método remove um recurso específico.<br/>
✅ PUT - O método substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.<br/>




<br/><br/><br/>

<div id="tabelaConteudo"></div>
<h1 align="center">Solução do Projeto</h1>

### Pastas Criadas e seus respectivos conteúdos

Siga as instruções para que sua solução esteja igual aos comandos que serão dados.

### 📋 criação de pastas e extenções

```bash
📂 Criar pasta src
# adcionar arquivo.js

# Dentro da pasta src : 

📂 Criar pasta controller
# adcionar arquivo.js

📂 Criar pasta model
# adcionar arquivo.js

📂 Criar pasta DAO
# adicionar arquivoDao.js

📂 Criar pasta infra e dentro dela :

# adicionar arquivo modelagem.js
# adiconar arquivo sqlite3-bd.js

#criar um .gitignore e adicionar a pasta node_modules

```

<br/><br/><br/>

<div id="instalacao">
</div>

### <h1 align="center"> Pré-requisitos e Instalação </h1>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/hiensenn/Api_Pub-Client.git

# Agora inicie o projeto, no terminal digite
$ npm init

# Instale as dependências pelo terminal/cmd
$ npm i express
$ npm i nodemon
$ npm i sqlite3

# Acesse a pasta do projeto no terminal/cmd
$ cd ./Api_Pub-Client

# Vá para a pasta src
$ cd src

# Agora você está na pasta do arquivo server.js
# Execute a aplicação em modo desenvolvedor
$ npm run dev


# O servidor inciará na porta:3031 - acesse <http://localhost:3031>
```
<br/><br/><br/>

<h1 align="center">Como deverá ficar sua solução e ambiente de trabalho</h1>

![image](https://user-images.githubusercontent.com/81387706/127369566-4f81ab31-d806-4892-b139-7c16b2b7ab58.png)



<br/><br/>

<div id="comoUsar">
</div>

<h1 align="center">POSTMAN</h1>

<h3>🎯 o que é o Postman ?<h3>
<h3> O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs.
Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.</h3>

![postman](https://user-images.githubusercontent.com/81387706/127377896-e84d4d4c-0416-4e58-a659-e4d41159d781.png)


<div id="get">
</div>
<h1>GET</h1>
  
<h3>observando o banco de dados</h3>
  
![postman_get](https://user-images.githubusercontent.com/81387706/127377260-69eca30f-e865-43bc-87d9-4885cfbb1e8e.png)

<div id="getId">
</div>
<h1>GET/ID</h1>

  <h3>Procurando uma unidade via ID do meu banco de dados</h3>
  
![postman_get_id](https://user-images.githubusercontent.com/81387706/127377289-7313586f-bc32-4c3d-8bb8-1466468e695d.png)

<div id="post">
</div>
<h1>POST</h1>

<h3>adicionando um novo cliente com sucesso</h3>

![postman_post](https://user-images.githubusercontent.com/81387706/127377305-bd6b24fa-b46c-42e8-9905-c674592e156b.png)

<h3>mostrando o novo cliente no banco de dados</h3>

![postman_post_get](https://user-images.githubusercontent.com/81387706/127377321-c8aaed90-795f-4265-acb0-c1a31745a82c.png)

<div id="delete">
</div>

<h1>DELETE</h1>

<h3>deletando um cliente do banco de dados</h3>

![postman_delete](https://user-images.githubusercontent.com/81387706/127377336-2e4f5df7-2aa0-4bbd-9ce0-a1069a0a567b.png)

<h3>Checando se cliente foi removido</h3>

![postman_delete_get](https://user-images.githubusercontent.com/81387706/127377363-29fe90e0-8290-4ff8-9efb-8b2622dac5cc.png)

<div id="put">
</div>

<h1>PUT</h1>

<h3>Modificando uma propriedade do cliente</h3>

![postman_put](https://user-images.githubusercontent.com/81387706/127377372-1e649448-d827-4295-9a37-2e67e00df194.png)


<h3>Checando se o cliente foi de fato modificado</h3>

![postman_put_get](https://user-images.githubusercontent.com/81387706/127377384-5a7b0213-d882-4e6f-9d3b-6d53ac8ac3ce.png)

<div id="testes">
</div>

<div id="tecnologias">
</div>






