var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE PRODUCTOS */ 
var searchController = require('../controllers/searchController');

router.get('/', searchController.search);

module.exports = router;