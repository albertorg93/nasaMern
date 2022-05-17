const datosUsers = require('../models/user');



//Obtiene nombre y masa de aquellos meteoritos cuya masa sea la especificada (route params)
const getAllUsers = async (req,res) => {
    const leer = await datosUsers.find({},'-_id')
    return leer;
    
}

const getUserbyEmail = async (req,res) => {
    const email = req.body.email;
    const pass = req.body.password;
    const users = await getAllUsers();
    const leer = await users.find(u => { return u.email === email && u.password === pass})
    console.log(leer,"esto es leer")
    if(leer){
    res.status(201).json(`Usuario ${leer.email} logado`) 
    } else {
        res.status(201).json(`Usuario no existe`) 
    }
     
}

//funcion que permite guardar una landing nueva mediante post
const createUser = async (req,res) => {
    
    const newLanding = new datosUsers(req.body); // {} nuevo producto a guardar
    try{
    const response = await newLanding.save();
   // .json({message:`Película ${response.title} guardada en el sistema con ID: ${response.id}`})
    res.status(201).send(`landing ${response.name} guardada correctamente`)
    } catch(err){
        res.status(400).json({message:err});
    }
  }

 //function que elimina una landing dependiendo del id que le pasemos por el body
 const editUser = async (req,res) => {
    value=req.body.id
    console.log(req.body)
    const response = await datosUsers.findOneAndUpdate({id: value}, req.body)
    res.status(201).send(`landing con id: "${value}" editada correctamente`)
}



  //function que elimina una landing dependiendo del id que le pasemos por el body
  const deleteUser = async (req,res) => {
      value=req.body.id
      const response = await datosUsers.deleteOne({id: value})
      res.status(201).send(`landing con id: "${value}" eliminada correctamente`)
}


const users = {
    getAllUsers,
    getUserbyEmail,
    createUser,
    editUser,
    deleteUser
}
module.exports = users;