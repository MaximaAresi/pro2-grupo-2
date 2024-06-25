const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

let usersController = {
    showLogin: function (req, res) {

        let errors = validationResult(req);

        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render("login", { errors: errors.array(), old: req.body });
        }
    },
    login: function (req, res) {
        let errors = validationResult(req);

        let filtro = {
            where: [{ mail: req.body.email }]
        };

        db.Usuario.findOne(filtro)
            .then((result) => {
                // return res.send(result)

                if (result) {
                    if (bcrypt.compareSync(req.body.contrasenia, result.contrasenia)) {
                        if (req.body.recordarme != undefined) {
                            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 30 });
                        }
                        req.session.user = result;
                        req.session.save();

                        return res.redirect("/users/profile/" + result.id);
                    } else {
                        return res.render("login", { errors: errors.array(), old: req.body });
                    }
                } else {
                    return res.render("login", { errors: errors.array(), old: req.body })
                }
            })
            .catch((err) => {
                return console.log(err);
            })
    },
    register: function (req, res) {
        let errors = validationResult(req);

        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render("register", { errors: errors.array(), old: req.body });
        }
    },
    store: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log("register")
            let form = req.body;
            let usuario = {
                usuario: form.usuario,
                mail: form.mail,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha: form.fecha,
                dni: form.dni,
                fotoPerfil: form.fdp || ""
            }
            db.Usuario.create(usuario)
                .then((result) => {
                    if (result) {
                        req.session.user = result;
                        req.session.save();
                        return res.redirect("/users/profile/" + result.id);
                    }
                }).catch((err) => {
                    return console.log(err);
                });
        } else {
            console.log(errors)
            res.render('register', { errors: errors.mapped(), old: req.body });
        }
    },
    profile: function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then((usuario) => {
                db.Producto.findAll({
                    where: { id_usuario: req.params.id },
                    order: [["createdAt", "DESC"]],
                    include: [{
                        model: db.Comentario,
                        as: "comentarios"
                    }]
                })
                    .then((productos) => {
                        return res.render("profile", { usuario: usuario, productos: productos });
                    }
                    ).catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    profileEdit: function (req, res) {
        return res.render("profile-edit", { "usuario": db.usuario });
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userId") 
        return res.redirect("/users/login");
    },
    profilePost: function (req, res) {
        let id = req.session.user.id;
        console.log(id);
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let form = req.body;
            console.log(form)
            let user = {
                usuario: form.usuario,
                mail: form.mail,
                fotoPerfil: form.fotoPerfil
            }
            if (form.contrasenia && form.contrasenia.length >= 4) {
                user.contrasenia = bcrypt.hashSync(form.contrasenia, 10);
            }
            db.Usuario.update(user, { where: { id: id } })
                .then(() => {
                    db.Usuario.findByPk(id)
                        .then((perfilEditado) => {
                            console.log(perfilEditado)
                            req.session.user = perfilEditado
                            req.session.save();
                            return res.redirect('/');
                        })
                })
                .catch((error) => {
                    return console.log(error);
                });
        } else {
            return res.render("profile-edit", { errors: errors.mapped(), old: req.body });
        }
    }
}

module.exports = usersController;