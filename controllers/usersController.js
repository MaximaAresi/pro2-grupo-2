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

                if (result) {
                    if (bcrypt.compareSync(req.body.contrasenia, result.contrasenia)) {
                        if (req.body.recordarme != undefined) {
                            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 5 });
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
        return res.render("register", { old: null });
    },
    store: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let form = req.body;
            let usuario = {
                usuario: form.usuario,
                mail: form.email,
                contrasenia: bcrypt.hashSync(form.contraseña, 10),
                fecha: form.fdn,
                DNI: form.dni,
                fotoPerfil: form.fdp
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
        return res.render("profile-edit");
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userId") //chequear si esta bien lo de userId
        return res.redirect("/users/login");
    }
}

module.exports = usersController;