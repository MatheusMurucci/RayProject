const express = require('express')
//Coloca as informações do express(biblioteca) na constante "express"
const app = express()
//Coloca a constante "express" como valor da constante "app"
const port = 3000
//Cria uma constante "port" com valor "3000"
app.use(express.json());

let bd = [
  //Cria uma variável "bd" como uma array 
  {
    //Cria um objeto dentro da array  
    id: "1",
    //Cria um valor/atributo do objeto com o nome "id" e o valor "1"
    name: "Matheus"
    //Cria um valor/atributo do objeto com o nome "name" e o valor "Matheus"
  },
  {
    //Cria um objeto dentro da array
    id: "2",
    //Cria um valor/atributo do objeto com o nome "id" e o valor "2"
    name: "Bruna"
    //Cria um valor/atributo do objeto com o nome "name" e o valor "Bruna"
  }
]

//get users
app.get('/users', (request, response) => {
  response.json(bd);
})

app.get('/users/:id', (request, response) => {

  //pegar o id fa requisição
  const idUser = request.params.id

  //encontrar o usuário correspondente no bd
  const user = bd.filter((usuario) => usuario.id === idUser);

  //responder a requisição com as info do users
  response.json(user);

})

app.post("/users", (request, response) => {

  //pegar o corpo da requisição
  const body = request.body;

  //criar um novo objeto a partir esse corpo
  const newUser = {
    id: (bd.length + 1).toString(),
    name: body.name
  }

  //adicionar esse novo objeto no banco
  bd.push(newUser);

  //responder a requisição com o banco completo
  response.json(bd);

})

app.delete("/users/:id", (request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id

  //percorrer o banco e encontrar quem tem o id da requisição
  bd = bd.filter((usuario) => usuario.id != idUser);

  //deleta o condenado


  //responder com o meu banco atualizado
  response.json(bd);

})

app.patch("/users/:id", (request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id

  //pegar o corpo da requisição
  const body = request.body;

  //percorrer o banco
  bd = bd.map((usuario) => {

    if (usuario.id === idUser) {
      usuario.name = body.name;
    }
    return usuario
  })

  //responder a requisição com o banco
  response.json(bd);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
