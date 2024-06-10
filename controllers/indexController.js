const db =  require('../database/models') /*../db/info */

let indexController = {
    main: function (req, res) {
        //return res.render("index", {db: db});

        db.Usuario.findAll() //poner filtrado dentro de los parentesis
        .then(function(response) {
            return res.send(response)
        }).catch(function(err) {
            return console.log(err);
        })


    }
}




module.exports = indexController;