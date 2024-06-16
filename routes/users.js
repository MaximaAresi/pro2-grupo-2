var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const { body } = require("express-validator");
const db = require('../database/models')


let loginValidation = [
    body("email")
        .notEmpty().withMessage("Por favor, introduzca su e-mail").bail()
        .isEmail().withMessage("El e-mail ingresado no es válido")
        .custom(function (value) {
            return db.Usuario.findOne({
                where: { email: value },
            })
                .then(function (usuario) {
                    if (!usuario) {
                        throw new Error("No existe ningún usuario registrado con ese e-mail")
                    }
                })
        }),
    body("contrasenia")
        .notEmpty().withMessage("Por favor, introduzca su contraseña")
        .custom(function (value, { req }) {
            return db.Usuario.findOne({
                where: {
                    email: req.body.email,
                    contrasenia: value
                },
            })
                .then(function (contrasenia) {
                    if (contrasenia == undefined) {
                        // validación con bycrypt
                    } else {
                        throw new Error("La contraseña no existe")
                    }
                })
        })
];

// RUTA: /users/login
router.get('/login', usersController.showLogin);

// RUTA: /users/register
router.get('/register', usersController.register);

// RUTA: /users/profile/[id]]
router.get('/profile/:id', usersController.profile);

// RUTA: /[id]]/edit
router.get('/:id/edit', usersController.profileEdit);


// Método: POST
router.post('/login', loginValidation, usersController.login);

module.exports = router;