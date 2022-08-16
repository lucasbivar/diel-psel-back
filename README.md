<div align="center">
    <img style="background-color: #181842; padding: 10px" src="https://dielenergia.com/assets/img/diel/icon.svg" width="100" />
    <h1>
        <b>Diel's Task</b><br>
        Back-end
    </h1>
    <h4>
        Back-end do desafio técnico do processo seletivo de estágio na Diel Energia
    </h4> 
</div>

---

<h2 id="conteudos">Conteúdos</h2>

[➜ Sobre o projeto](#🔎-sobre-o-projeto)<br>
[➜ O que aprendi/fixei](#📚-o-que-aprendi-e-fixei)<br>
[➜ Rotas da API](#🌐-rotas-da-api)<br>
[➜ Como rodar na sua máquina](#ℹ️-como-rodar-na-sua-máquina)<br>

---

## 🔎 Sobre o projeto

<sup>[Voltar ao topo](#conteudos)</sup><br>

O objetivo do desafio técnico é construir o back-end e o front-end de uma SPA de calendário de tarefas do dia utilizando uma stack que você sinta confortável, pensando sempre em performance, segurança e escalabilidade. O presente repositório contém o código e informações acerca do Back-end da aplicação, para acessar o repositório do Front-end clique [aqui](https://github.com/lucasbivar/diel-psel-front).

Para ver o funcionamento do Back-end e do Front-end não é necessário rodar o código na sua máquina, uma vez que ambos já estão hospedados (Se tiver interesse em rodar, siga o [tutorial](#ℹ️-como-rodar-na-sua-máquina) no fim do README). Links do resultado final do desafio já hospedado:

- Back-end: 
  - https://task-back-diel.herokuapp.com/api/task
- Front-end (Aplicação final para usuário comum): 
  - https://diel-psel-front.vercel.app/

---

### ➡ Tecnologias Utilizadas na API
-   [x] Node.js
-   [x] Express.js
-   [x] Mongoose ODM - MongoDB
-   [x] Heroku - Deploy

---

### ➡ Funcionalidades
A aplicação realiza o CRUD da API (Create, Read, Update and Delete) e possui as seguintes funcionalidades:

#### Funções principais:
- [x] Listagem de todas as tarefas
- [x] Listagem de tarefa por ID
- [x] Criação de uma nova tarefa (titulo, descrição, data, hora e duração)
- [x] Alteração dos dados/status de uma tarefa
- [x] Remoção de uma tarefa

---

## 📚 O que aprendi e fixei

<sup>[Voltar ao topo](#conteudos)</sup><br>

Além de entender melhor como o Javascript trata os diferentes fusos horários no objeto Date baseado na localização, também fixei mais alguns conceitos:

- [x] Uso da Arquitetura MVC REST API
- [x] Uso do ODM Mongoose para gerenciar o relacionamento entre os dados do MongoDB
- [x] Uso do framework Express.js para facilitar o desenvolvimento do Back-end
- [x] Uso do Insomnia para testar API
- [x] Correção de erros de CORS da API
- [x] Organização de código no geral
- [x] Deploy do Back-end no Heroku utilizando variáveis de ambiente

---

## 🌐 Rotas da API

### ➜ Tarefas
  <details> 
  <summary>GET - Todas as tarefas</summary>

  <br>

  ![](https://img.shields.io/badge/get-BD93F9.svg?&style=for-the-badge&logoColor=white)


  #### Retorna todas as tarefas

  - Route:

  ```
  /api/task
  ```
  </details>

  <details> 
  <summary>GET - Tarefa por ID</summary>
  <br>

  ![](https://img.shields.io/badge/get-BD93F9.svg?&style=for-the-badge&logoColor=white)


  #### Retorna a tarefa do respectivo ID

  - Route:

  ```
  /api/task/:id
  ```
  </details>


  <details> 
  <summary>POST - Criar tarefa</summary>
  <br>

  ![](https://img.shields.io/badge/post-49F37B.svg?&style=for-the-badge&logoColor=white)

  #### Cria uma nova tarefa

  - Route:

  ```
  /api/task
  ```

  - Body:
  ```json
  {
    "title": "Título da Tarefa",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at rutrum odio, at elementum metus. Fusce luctus odio ut orci egestas vestibulum. Nunc accumsan blandit condimentum. Donec risus nunc, interdum a quam sit amet, gravida vestibulum diam. Proin eleifend odio et enim ullamcorper interdum. Quisque a sapien eu diam porttitor auctor. Aenean mollis urna sapien, egestas consequat nisi blandit at.",
    "dateTime": "2022-08-12T09:23:00", // data e horário para começar tarefa
    "duration": 83, // duração em minutos
  }

  ```
  </details>

  <details> 
  <summary>PATCH - Editar tarefa</summary>
  <br>

 ![](https://img.shields.io/badge/patch-FFB86C.svg?&style=for-the-badge&logoColor=white)
  
  #### Editar tarefa com respectivo ID

  - Route:

  ```
  /api/task/:id
  ```

  - Body:
  
  ```json
  {
    "title": "Lorem Ipsum 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at rutrum odio, at elementum metus. Fusce luctus odio ut orci egestas vestibulum. Nunc accumsan blandit condimentum. Donec risus nunc, interdum a quam sit amet, gravida vestibulum diam. Proin eleifend odio et enim ullamcorper interdum. Quisque a sapien eu diam porttitor auctor. Aenean mollis urna sapien, egestas consequat nisi blandit at.",
    "dateTime": "2022-08-12T09:23:00",
    "duration": 83,
    "status": "ToDo", // "ToDo" ou "Done"
    "deleted": false,
  }
  ```
  </details>
 
  <details> 
  <summary>DELETE - Deletar tarefa</summary>
  <br>

  ![](https://img.shields.io/badge/delete-FF4D4B.svg?&style=for-the-badge&logoColor=white)

  #### Deletar tarefa com respectivo ID

  - Route:

  ```
  /api/task/:id
```
 </details>


---

## ℹ️ Como rodar na sua máquina

<sup>[Voltar ao topo](#conteudos)</sup><br>

Para testar essa aplicação na sua máquina você precisa atender aos requisitos:

- Criar um Banco de Dados no [MongoDB Atlas](https://account.mongodb.com/account/login) autorizando o acesso através de qualquer IP ou do IP da sua máquina. Lembre-se de guardar o nome do banco de dados, e o usuário e senha de acesso.

- Clonar o repositório da API (necessário ter o git instalado)
  - No terminal, digitar:
    ```bash 
    # Clonando repositório
    $ git clone https://github.com/lucasbivar/diel-psel-back 

    # Entrando na pasta do projeto
    $ cd diel-psel-back
    ```

- Instalar dependências do projeto (necessário ter o npm):
  - No terminal da pasta raiz do projeto, digitar:
    ```bash 
    $ npm install
    ```
- Criar um arquivo `.env` na raiz do projeto contendo a estrutura abaixo, e preencher com as informações citadas no primeiro passo:
  ```env
    PORT=2000
    MONGO_DB_USER=SEU_USER
    MONGO_DB_PASSWORD=SUA_SENHA
    MONGO_DB_DATABASE=SEU_BANCO_DE_DADOS
  ```

- Executar o Back-end:
  - No terminal da pasta raiz do projeto, digitar:
    ```bash
    $ npm start
    ```
  - O Back-end será executado na porta 2000, para testar você pode utilizar uma ferramenta de teste de requisições como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) na seguinte URL:
    - http://localhost:2000/api/task

- EXTRA:
  - Este Back-end já possui o Front-end consumindo essa API, para saber mais informações e como usá-lo acesse:
    - https://github.com/lucasbivar/diel-psel-front

---

<div>
  <sub>Made with 💙 by <a href="https://github.com/lucasbivar">Lucas Bivar</a></sub>
</div>