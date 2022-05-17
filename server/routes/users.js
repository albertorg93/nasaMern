const express = require('express');
const router = express.Router();

const user = require('../controllers/users');
// const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN USUARIOS**********/

router.get('/all',user.getAllUsers);
router.post('/email',user.getUserbyEmail);
//router.get('/landings',landings.getNameandMass);

//POST --> Create User
router.post('/create',user.createUser);

//PUT --> Edit User
router.put('/edit',user.editUser);

//DELETE --> Delete User
router.delete('/delete',user.deleteUser);

module.exports = router;