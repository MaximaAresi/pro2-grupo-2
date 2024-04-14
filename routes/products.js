var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE PRODUCTOS */ 
var productsController = require('../controllers/productsController');

/* SUFIJOS DE /products */
router.get('/', productsController.main);

router.get('/detalle/:id?', productsController.detalle);

router.get('/add', productsController.productAdd);

module.exports = router;