const db =  require('../database/models') /*../db/info */


let usersController = {
    login: function(req, res) {
        return res.render("login");
    },
    register: function(req, res) {
        return res.render("register");
    },
    profile: function(req, res) {
        return res.render("profile", );
    },
    profileEdit: function(req, res) {
        return res.render("profile-edit");
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId") //chequear si esta bien lo de userId
        return res.redirect("/") //fijarse si aca poner el redirect a la pagina (ejs) de login
    }
}


module.exports = usersController;