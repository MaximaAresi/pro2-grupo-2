var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE USERS */
var usersController = require('../controllers/usersController');


/* SUFIJOS DE /users */

// RUTA: /users/login
router.get('/login', usersController.login);

// RUTA: /users/register
router.get('/register', usersController.register);

// RUTA: /users/[id]]
router.get('/profile/:id', usersController.profile);

// RUTA: /[id]]/edit
router.get('/:id/edit', usersController.profileEdit);


module.exports = router;