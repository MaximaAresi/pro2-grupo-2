var express = require('express');
var router = express.Router();

/* REQUIERO EL CONTROLLER DE INDEX */ 
var profileController = require('../controllers/profileController');

/* SUFIJOS DE /index */
router.get('/:id?', profileController.main);

router.get('/:id?/edit', profileController.edit);

module.exports = router;