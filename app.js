const express = require('express')
//Coloca as informações do express(biblioteca) na constante "express"
const userService = require('./services/users')
const app = express()
//Coloca a constante "express" como valor da constante "app"
const port = 3000
//Cria uma constante "port" com valor "3000"
app.use(express.json());
//É necessário para que a aplicação aceite informações json, o app.use pode ser usado para css e html também


// get users
app.get('/users', (request, response) => {
  response.json(userService.getUsers());
  //Quando "/users" for usado, será dada uma resposta/retorno(response) que será nesse caso o bd 
})

app.get('/users/:id', (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id
  //É usado para pegar o id

  // encontrar o usuário correspondente no bd

  //Percorre o array "bd" em busca do id inserido(o filter é necessário para arrays)

  // responder a requisição com as info do users
  response.json(userService.getUserById(idUser));

})

app.post("/users", (request, response) => {
  //Permite incerir um novo uuário(post)

  const body = request.body;
  //pega o corpo da requisição

  response.status(201).json(userService.createUser(body));
  // responder a requisição com o banco completo
})

app.delete("/users/:id", (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id

  userService.deleteUser(idUser)

  // responder com o meu banco atualizado
  response.json("Apagado com sucesso");

})

app.patch("/users/:id", (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id

  // pegar o corpo da requisição
  const body = request.body;

  userService.updateUser(idUser, body);
  
  response.json("Atualizado com sucesso");

  // percorrer o banco

  // responder a requisição com o banco

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
