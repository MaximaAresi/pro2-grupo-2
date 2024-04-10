var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE PRODUCTOS */ 
var productsController = require('../controllers/productsController');

/* SUFIJOS DE /products */
router.get('/', productsController.index);

router.get('/detalle/:id?', productsController.detalle);

module.exports = router;