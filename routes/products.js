var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE PRODUCTOS */
var productsController = require('../controllers/productsController');
var indexController = require('../controllers/indexController');


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
router.post('/add', productsController.guardarProducto);

module.exports = router; 