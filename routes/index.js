var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */
var indexController = require('../controllers/indexController');

/* SUFIJOS DE /index */
router.get('/', indexController.main);

module.exports = router;