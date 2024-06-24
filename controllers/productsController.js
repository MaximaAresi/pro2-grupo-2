const db = require('../database/models') /*../db/info */
const op = db.Sequelize.Op;
const { validationResult } = require('express-validator');


let productsController = {
    detalle: function (req, res) {

        // Recupero el id de mi ruta
        let idProducto = req.params.id

        db.Producto.findByPk(idProducto)
            .then((result) => {
                if (result) {
                    db.Comentario.findAll({
                        where: { producto_id: result.id },
                        include:
                            [{
                                model: db.Usuario,
                                as: "usuarios"
                            }]
                    })
                        .then((comentarios) => {
                            db.Usuario.findByPk(result.id_usuario)
                            .then((usuario) => {
                                console.log(result);
                                return res.render("product", { producto: result, comentarios, usuario: usuario });
                            })
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

        db.Producto.findAll({
            where: {
                [op.or]: [
                    { nombreProducto: { [op.like]: '%' + search + '%' } },
                    { descripcionProducto: { [op.like]: '%' + search + '%' } },
                ]
            }
        })
            .then((productos) => {
                let resultadosBusqueda = productos;
                return res.render("search-results", { listadoProducto: productos, resultadosBusqueda: resultadosBusqueda })
            })
    },
    guardarProducto: function (req, res) {
        let errores = validationResult(req);
        //res.send(errores);
        if (errores.isEmpty()) {
            productId = db.Producto.create({
                nombreProducto: req.body.Nombre_Producto,
                descripcionProducto: req.body.Descripcion,
                fotoProducto: req.body.Foto_Producto,
                precioProducto: req.body.Precio_Producto
            }).then(function (producto) {
                return res.redirect("/products/detalle/" + producto.id);
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            res.render("product-add", {
                errores: errores.array(),
                old: req.body
            });
        }
    },
    comentarProducto: function (req, res) {
        let errores = validationResult(req);
        let form = req.body;
        if (errores.isEmpty()) {
            let comentario = {
                comentario: form.texto_comentario,
                idUsuario: req.session.user.id,
                idProducto: req.params.id
            }
     
            db.Comentario.create(comentario)
                .then(function (result) {
                    return res.redirect("/");
                }).catch(function (err) {
                    console.log(err);
                })
        } else {
            let id = req.params.id
            console.log(id);
            let filtro = {
                include: [
                    {
                        association: "comentarios",
                        include: [
                            { association: "usuarios" }
                        ]
                    },
                    { association: "usuarios" }
                ]
            };
            db.Producto.findByPk(id, filtro)
            .then(function (data) {
                return db.Comentario.findAll({
                    where:{idProducto:id},
                    order:[["createdAt", "DESC"]],
                    include:[{association:"usuarios"}]
                }).then(function (comentarios) {
                    return res.render("product", {
                        comentario: comentarios,
                        data:data,
                        errores:errores.mapped(),
                        old:req.body
                    });
                });
            })
            .catch(function (error) {
                return console.log(error);
            })
        }
    },
    edit: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()) { //Si no encuentra errores manda la informacion del form y te lleva/redirige al producto editado
            let form = req.body
            let id_usuario = req.session.usuario.id;

            let errors = validationResult(req);
           

            if (errors.isEmpty()){

                let product = {
                    id_vendedor: id_usuario,
                    foto_producto: form.fotoProducto,  
                    nombreProducto: form.nombreProducto, 
                    descripcionProducto: form.descripcionProducto 
                }

                db.Producto.update(product, { where: [{ id: req.params.id}] })
                    .then((result) => {
                        return res.redirect("/products" + result.id) 
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else { //Si encuentra un error me lo va a motrar en la vista
                let id = req.params.id

                db.Producto.findByPk(id, { include: [{ association: "usuarios" }] })
                    .then(function (resultado) {
                        return res.render("product-edit", { producto: resultado, errors: errors.mapped(), old: req.body })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    },
    productEdit: function (req, res) {
        
        let id = req.params.id;
        
        db.Producto.findByPk(id)
        .then(function(result){
           return res.render("product-edit", { "producto": result })
        })
    },


};


//db.Comentario.findAll({ where: { producto_id: result.id }, order:["createdAt", "DESC"] })
//                        .then((comentarios) => {
//                            return res.render("product", { producto: result, comentarios })});
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

//return res.send("Producto no encontrado"); // Terminar
//db.Comentario.findAll({
//    where: {
//      searchResults: { [Op.like]: [{ texto_comentario:'%%' }] },
//      order: ["createdAt", "DESC"]
//    }})
//return res.render('products/detalle')

module.exports = productsController;