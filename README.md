# Api-de-Usuarios
API para gerenciamento de usuários

## Instalação
Para instalar e rodar a API localmente:



```bash
git clone https://github.com/ithaloDev/Api-de-Usuarios.git
cd Api-de-Usuarios
npm install
npm start
```

## Endpoints
### GET /users/
Retorna todos os usuários.

### POST /users/create
Cria um novo usuário.

Body: { "name": "Nome", "email": "email@example.com" }

### PUT /users/:id
Atualiza um usuário existente.

Body: { "name": "Nome Atualizado", "email": "updated@example.com" }

### DELETE /users/:id
Exclui um usuário pelo ID.

### Swagger
A API possui documentação Swagger. Abaixo está uma imagem da api

