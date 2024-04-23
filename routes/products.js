var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE PRODUCTOS */ 
var productsController = require('../controllers/productsController');
var indexController = require('../controllers/indexController');


// RUTA: /products/
router.get('/', indexController.main); /* todos los productos */

// RUTA: /products/detalle/[id]
router.get('/detalle/:id', productsController.detalle);

// RUTA: /products/add
router.get('/add', productsController.productAdd);

// RUTA: /products/search
router.get('/search', productsController.search);

module.exports = router; 