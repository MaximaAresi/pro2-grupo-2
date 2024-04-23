var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */
var indexController = require('../controllers/indexController');

// RUTA: /
router.get('/', indexController.main);

module.exports = router;