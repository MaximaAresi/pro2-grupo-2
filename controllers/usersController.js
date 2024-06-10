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
    }
}

module.exports = usersController;