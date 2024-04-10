var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */ 
var indexController = require('../controllers/indexController');

/* SUFIJOS DE /index */
router.get('/', indexController.index);

router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/profile', indexController.profile);


module.exports = router;