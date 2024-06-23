const db = require('../database/models') /*../db/info */

let indexController = {
  main: function (req, res) {
    db.Producto.findAll({
      include: [{
        model: db.Comentario,
        as: "comentarios"
      }]
    }) //poner filtrado dentro de los parentesis
      .then(function (response) {
            return res.render("index", { listaProducto: response})
      }).catch(function (err) {
        return console.log(err);
      })

  },
  descripcion: function (req, res) {
    db.Producto.findAll({
      where: {
        searchResults: { [Op.or]: [{ descripcionProducto: '%%' }, { nombreProducto: '%%' }] },
        order: ["createdAt", "DESC"]
      }
    })
      .then(function (productos) {
        if (searchResults != undefined) {
          res.render("search-results", { productos: productos })
        } else {
          return res.send("No hay resultados para su criterio de búsqueda"); //chequear que no funciona
        }
      })
  }
};

module.exports = indexController;