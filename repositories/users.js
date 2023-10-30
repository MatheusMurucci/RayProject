let {bd} = require('../databases/users')


const getUsers = () =>{
    return bd;
}

const getUserById = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);
}


module.exports ={
    getUsers,
    getUserById
}