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
        searchResults:{[Op.or]:[{descripcionProducto:'%%'}, {nombreProducto:'%%'}]},
        order: ["createdAt", "DESC"]
      }
    })
      .then(function (productos) { 
        if (searchResults = undefined) {
          res.render ("search-results", {productos: productos})
      }else{
        return res.send("No hay resultados para su criterio de búsqueda");
      }
      })
  }
};

module.exports = indexController;