const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

let usersController = {
    showLogin: function (req, res) {
        return res.render("login");
    },
    login: function (req, res) {

        let filtro = {
            where: [{ mail: req.body.email }]
        };

        db.Usuario.findOne(filtro)
            .then((result) => {
                console.log("Llegaron datos de la DB: " + result);

                if (result) {
                    // let check = bcrypt.compareSync(req.body.contrasenia, result.contrasenia);

                    if (req.body.contrasenia == result.contrasenia) { // hasta que hagamos el register
                        console.log("CONTRASENIA OKAY");
                        if (req.body.recordarme != undefined) {
                            console.log("RECORDARME");
                            // res.cookie("userId", result.id, { maxAge: 1000 * 60 * 5 });
                        }

                        req.session.user = result;
                        req.session.save();

                        return res.redirect("/users/profile/" + result.id);

                    } else {
                        console.log("CONRASENIA INCRRECTA");
                        return res.redirect("/users/login");
                    }
                } else {
                    console.log("No hay datos");
                    return res.redirect("/users/login");
                }
            })
            .catch((err) => {
                return console.log(err);
            })
    },
    register: function (req, res) {
        return res.render("register");
    },
    profile: function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then((usuario) => {
                db.Producto.findAll({
                    where: { id_usuario: req.params.id },
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