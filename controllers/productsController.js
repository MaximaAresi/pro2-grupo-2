const db = require('../database/models') /*../db/info */
const op = db.Sequelize.Op;


let productsController = {
    detalle: function (req, res) {

        // Recupero el id de mi ruta
        let idProducto = req.params.id

        db.Producto.findByPk(idProducto)
            .then((result) => {
                if (result) {
                    db.Comentario.findAll({ where: { producto_id: result.id }, include: [{ model: db.Usuario, as: "usuarios" }] })
                        .then((comentarios) => {
                            return res.render("product", { producto: result, comentarios });

                        })
                } else {
                    // Caso donde el producto no existe
                    return res.send("Producto no encontrado"); // Terminar
                }
            })
            .catch((err) => {
                console.log(err)
            });

    },
    productAdd: function (req, res) {
        return res.render("product-add", { db: db })
    },
    search: function (req, res) {
        let search = req.query.search;
        console.log(req.query.search)
        db.Producto.findAll({
            where: {
                [op.or]: [
                    { nombreProducto: { [op.like]: '%' + search + '%' } },
                    { descripcionProducto: { [op.like]: '%' + search + '%' } },
                ]
            }
        })
            .then((productos) => {
                return res.render("search-results", { listadoProducto: productos })
            })

    },
    guardarProducto: function (req, res) {
        return res.render("product", { db })
    }
}

// const indexController = {

//     detalle: function (req, res) {
//         let idPelicula = req.params.idPelicula;

//         return res.render("detalleMovies", { movie: db.filtrarPorID(idPelicula) });
//     }
// }


module.exports = productsController;