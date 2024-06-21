var express = require('express');
var router = express.Router();
const { body } = require("express-validator");
const db = require('../database/models')

/* REQUIERO EL CONTROLLER DE PRODUCTOS */
var productsController = require('../controllers/productsController');
var indexController = require('../controllers/indexController');

//Validaciones
let productValidation = [
    body ('Nombre_Producto').notEmpty().withMessage("Por favor, introduzca el nombre del producto").bail(),
    body ('Descripcion').notEmpty().withMessage("Por favor, introduzca una descripcion para el producto"),
    body ('Foto_Producto').notEmpty().withMessage("Por favor, introduzca una imagen del producto"),
    body ('Precio_Producto').notEmpty().withMessage("Por favor, introduzca el precio del producto"),
];

let commentValidation = [
    body ('Comentario')
    .notEmpty().withMessage("Por favor, escriba su comentario")
    .isLength({min:3}).withMessage("El comentario debe tener minimo tres caracteres"),
];

// RUTA: /products/
router.get('/', indexController.main); /* todos los productos */

router.get('/search-results', indexController.descripcion);

// RUTA: /products/detalle/[id]
router.get('/detalle/:id', productsController.detalle);

// RUTA: /products/search
router.get('/search', productsController.search);

// RUTA: /products/add
router.get('/add', productsController.productAdd)


// -- Método POST --

// RUTA: /products/add
router.post('/add', productValidation, productsController.guardarProducto);

module.exports = router; 