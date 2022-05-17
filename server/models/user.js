const mongoose = require('mongoose');

const objectSchema = {
    email: { 
        type: String, 
   
    },
    password: { 
        type: String, 
  
    }

};
// Crear el esquema
const userSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const User = mongoose.model('user', userSchema);

module.exports = User;
