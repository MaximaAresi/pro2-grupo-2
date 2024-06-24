var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require('bcryptjs');

let registerValidation = [
    body("mail")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor introduzca un e-mail").bail()
        .isEmail().withMessage("El e-mail ingresado no es válido. Por favor introduzca un e-mail")
        // busco a ver si ya hay un usuario con el mismo mail 
        .custom(function (value) {
            return db.Usuario.findOne({
                where: { email: value }
            })
                .then(function (usuario) {
                    if (usuario) {
                        throw new Error('El mail ingresado ya se encuentra registrado')
                    }
                })
            })
    ,
    body("usuario")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor ingrese un nombre de usuario").bail()
    ,
    body("contrasenia")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor ingrese una contreseña").bail()
        .isLength({ min: 4, max: 250 }).withMessage("La contraseña debe tener más de 4 caracteres y menos de 250")
    , 
    body('fecha')
    .optional({ checkFalsy: true }) // Permite que este vacio, pero si no lo esta tiene que cumplir con las condiciones. 
    .isDate().withMessage('Por favor, ingrese la fecha en formato AAA/MM/DD')
    ,
    body('dni')
    .optional({ checkFalsy: true })
    .isInt().withMessage('Por favor, complete un DNI numerico.')
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

let editValidation = [
    body("mail")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor introduzca un e-mail").bail()
        .isEmail().withMessage("El e-mail ingresado no es válido. Por favor introduzca un e-mail").bail()
    ,
    body("usuario")
        .notEmpty().withMessage("El campo no puede estar vacío. Por favor ingrese un nombre de usuario").bail()
    ,
    body("contrasenia")
        .optional({ chaeckFalsy: true})
        .isLength({ min: 4, max: 250 }).withMessage("La contraseña debe tener más de 4 caracteres y menos de 250").bail()
]

// RUTA: /users/login
router.get('/login', usersController.showLogin);

// RUTA: /users/register
router.get('/register', usersController.register);

// RUTA: /users/profile/[id]]
router.get('/profile/:id', usersController.profile);

// RUTA: /[id]]/edit
router.get('/edit/:id', usersController.profileEdit);


// Método: POST
router.post('/register', registerValidation, usersController.store);
router.post('/login', loginValidation, usersController.login);
router.post('/logout', usersController.logout);

router.post('/edit/:id', editValidation, usersController.profilePost);

module.exports = router;