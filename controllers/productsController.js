const db = require('../database/models') /*../db/info */
const op = db.Sequelize.Op;
const {validationResult} = require('express-validator');


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
        let errores = validationResult(req);
        //res.send(errores)
        if (errores.isEmpty()) {
            let producto = req.body;
            productId = ProductoModel.create(producto);
            res.redirect('/product-add' + productId); //chequear este redirect
        //return res.render('product-add', {mensajeDeError: errores.mapped()})
        }else{
            res.render('product-add', {errores: errores.array()});
        }
        return res.render("product", { db })
    }
        
    }

//cargarProducto: function (req, res) {
        
//let filtro = {
//    where:[{mail: req.body.email}]
//};

//db.Usuario.findOne(filtro)
   
//////////////////////////////////
// const indexController = {

//     detalle: function (req, res) {
//         let idPelicula = req.params.idPelicula;

//         return res.render("detalleMovies", { movie: db.filtrarPorID(idPelicula) });
//     }
// }


module.exports = productsController;