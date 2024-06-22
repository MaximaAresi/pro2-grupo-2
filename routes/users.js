var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require('bcryptjs');

let registerValidation = [
    body("email")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor introduzca un e-mail").bail()
        .isEmail().withMessage("El e-mail ingresado no es válido. Por favor introduzca un e-mail")
    ,
    body("usuario")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor ingrese un nombre de usuario").bail()
    ,
    body("contraseña")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor ingrese una contreseña").bail()
        .isLength({ min: 4, max: 250 }).withMessage("La contraseña debe tener más de 4 caracteres y menos de 250")
]

let loginValidation = [
    body("email")
        .notEmpty().withMessage("Por favor, introduzca su e-mail").bail()
        .isEmail().withMessage("El e-mail ingresado no es válido")
        .custom(function (value) {
            return db.Usuario.findOne({
                where: {
                    mail: value
                },
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
            console.log(req.body)
            return db.Usuario.findOne({
                where: {
                    mail: req.body.email
                },
            })
                .then(function (result) {
                    let hash = bcrypt.hashSync(req.body.contrasenia);
                    if (result && result.contrasenia !== hash) {
                        throw new Error("La contraseña es incorrecta")
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
router.post('/profile/id', registerValidation, usersController.store);
router.post('/login', loginValidation, usersController.login);
router.post('/logout', usersController.logout);

module.exports = router;