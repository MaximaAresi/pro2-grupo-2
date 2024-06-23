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
                Nombre: req.body.Nombre_Producto,
                Descripcion: req.body.Descripcion,
                Foto: req.body.Foto_Producto,
                Precio: req.body.Precio_Producto
            }).then(function (res) {
                res.redirect('/'); // res.redirect('/'+ productId); //esto no funciona
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            res.render("product-add", {
                errores: errores.array(),
                old: req.body
            });
        }
        return res.render("product", { db })
    },
    comentarProducto: function (req, res) {
        let errores = validationResult(req);
        let form = req.body;
        if (errores.isEmpty()) {
            let comentario = {
                comentario: form.Comentario,
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
            let filtro = {
                include: [
                    {
                        association: "comentarios",
                        include: [
                            { association: "usuarios" }
                        ]
                    },
                    {association: "usuarios"}
                ]
            }


        }
    }, 
    edit: function (req, res) {

        let errors = validationResult(req);

        if(errors.isEmpty()){ //Si no encuentra errores manda la informacion del form y te lleva/redirige al producto editado
            let form = req.body

            let id_usuario = req.session.usuario.id; 

            let product = {
                id_vendedor: id_usuario, 
                foto_producto: form.Foto_Producto,// Viene de product-edit y product-add, es la clave. 
                nombreProducto: form.Nombre_Producto,// Viene de product-edit y product-add, es la clave.
                descripcionProducto: form.Descripcion// Viene de product-edit y product-add, es la clave.
            }

            db.Producto.update( product, {where: [{id: form.id}]})
                .then(function(result){
                    return res.redirect("/products/detalle/:" + form.id) //ESTA PARTE REVISARLA, sobrtodo la ruta entre ""
                })
                .catch(function(error){
                    console.log(error);
                })
        } else { //Si encuentra un error me lo va a motrar en la vista

            let id= req.params.id

            db.Producto.findByPk(id, {include:[{association:"usuarios"}]})
                .then(function(resultado) {
                    return res.render("product-edit", {producto: resultado, errors: errors.mapped(), old: req.body})
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, 
    productEdit: function (req, res) {
        return res.render("product-edit", { db: db })
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