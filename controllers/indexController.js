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

  }
}
const searchController = {  //cambiar a indexController cuando borre lo de arriba, ver donde va el OR
  index: function (req, res) {
    let filtrado = {
      /*  where: [{descripcion}, {length: 120}, {nombre}] */
      /* order: [["title", "DESC"]],
      limit: 2,
      offset: 1 */
    };

    db.Producto.findAll(filtrado)
      .then(function (results) {
        return res.render("search-results", { listaProductos: results }) //ver esto de lista productos
      })
      .catch(function (error) {
        return console.log(error);;
      });
  }
}





module.exports = indexController;