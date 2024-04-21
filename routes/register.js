var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */ 
var registerController = require('../controllers/registerController');

/* SUFIJOS DE /index */
router.get('/', registerController.main);

module.exports = router;