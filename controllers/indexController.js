const db = require('../database/models') /*../db/info */

let indexController = {
  main: function (req, res) {
    // return res.render("index", {db: db});
      db.Producto.findAll() //poner filtrado dentro de los parentesis
          .then(function (response) {
           return res.render("index", { listaProducto: response })
          }).catch(function (err) {
           return console.log(err);
         })

  },
  descripcion: function (req, res) {
    db.Productos.findAll({
      where: {
        searchResults:{[Op.or]:[{descripcionProducto:'%%'}, {nombreProducto:'%%'}]}
      }
    })
      .then(function (productos) {
        res.render ("search-results", {productos: productos})
      })
  }
};

module.exports = indexController;