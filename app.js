const express = require('express')
//Coloca as informações do express(biblioteca) na constante "express"
const userRepository = require('./repositories/users')
const app = express()
//Coloca a constante "express" como valor da constante "app"
const port = 3000
//Cria uma constante "port" com valor "3000"
app.use(express.json());
//É necessário para que a aplicação aceite informações json, o app.use pode ser usado para css e html também


// get users
app.get('/users', (request, response) => {
  response.json(userRepository.getUsers());
  //Quando "/users" for usado, será dada uma resposta/retorno(response) que será nesse caso o bd 
})

app.get('/users/:id', (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id
  //É usado para pegar o id

  // encontrar o usuário correspondente no bd
  
  //Percorre o array "bd" em busca do id inserido(o filter é necessário para arrays)

  // responder a requisição com as info do users
  response.json(userRepository.getUserById(idUser));

})

app.post("/users", (request, response) => {
  //Permite incerir um novo uuário(post)

  //p egar o corpo da requisição
  const body = request.body;

  // criar um novo objeto a partir esse corpo
  const newUser = {
    id: (bd.length + 1).toString(),
    name: body.name
  }

  // adicionar esse novo objeto no banco
  bd.push(newUser);

  // responder a requisição com o banco completo
  response.json(bd);

})

app.delete("/users/:id", (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id

  // percorrer o banco e encontrar quem tem o id da requisição
  bd = bd.filter((usuario) => usuario.id != idUser);

  // deleta o condenado


  // responder com o meu banco atualizado
  response.json(bd);

})

app.patch("/users/:id", (request, response) => {

  // pegar o id da requisição
  const idUser = request.params.id

  // pegar o corpo da requisição
  const body = request.body;

  // percorrer o banco
  bd = bd.map((usuario) => {

    if (usuario.id === idUser) {
      usuario.name = body.name;
    }
    return usuario
  })

  // responder a requisição com o banco
  response.json(bd);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
