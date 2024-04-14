var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */ 
var loginController = require('../controllers/loginController');

/* SUFIJOS DE /index */
router.get('/', loginController.main);

module.exports = router;