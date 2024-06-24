var express = require('express');
var router = express.Router();
const { body } = require("express-validator");
const db = require('../database/models')

/* REQUIERO EL CONTROLLER DE PRODUCTOS */
var productsController = require('../controllers/productsController');
var indexController = require('../controllers/indexController');

//Validaciones
let productValidation = [ // Validaciones para crear un producto
    body ('Nombre_Producto').notEmpty().withMessage("Por favor, introduzca el nombre del producto").bail(),
    body ('Descripcion').notEmpty().withMessage("Por favor, introduzca una descripcion para el producto"),
    body ('Foto_Producto').notEmpty().withMessage("Por favor, introduzca una imagen del producto"),
    body ('Precio_Producto').notEmpty().withMessage("Por favor, introduzca el precio del producto"),
];

let commentValidation = [ // Validaciones para agregar un comentario
    body ('texto_comentario')
    .notEmpty().withMessage("Por favor, escriba su comentario")
    .isLength({min:3}).withMessage("El comentario debe tener minimo tres caracteres"),
];

let editValidation = [ // Validaciones para editar un producto, mismas que se usan al crear un producto
    body ('Nombre_Producto').notEmpty().withMessage("Por favor, es necesario que introduzca el nombre del producto").bail(),
    body ('Descripcion').notEmpty().withMessage("Por favor, es necesario que introduzca una descripcion para el producto"),
    body ('Foto_Producto').notEmpty().withMessage("Por favor, es necesario que introduzca una imagen del producto"),
    body ('Precio_Producto').notEmpty().withMessage("Por favor,es necesaro que introduzca el precio del producto"),
]


// RUTA: /products/
router.get('/', indexController.main); /* todos los productos */

router.get('/search-results', indexController.descripcion);

// RUTA: /products/detalle/[id]
router.get('/detalle/:id', productsController.detalle);

// RUTA: /products/search
router.get('/search', productsController.search);

// RUTA: /products/add
router.get('/add', productsController.productAdd)

// RUTA: /product-edit/[id]
router.get('/product-edit/:id', productsController.productEdit) // estará bien? 


// -- Método POST --

// RUTA: /products/add
router.post('/add', productValidation, productsController.guardarProducto);
router.post('/comentario/id/:id', commentValidation, productsController.comentarProducto);

//RUTA: /products/edit/[id]
router.post('/edit', editValidation, productsController.edit ) 

module.exports = router; 