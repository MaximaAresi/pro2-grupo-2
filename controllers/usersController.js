const db =  require('../database/models') /*../db/info */


let usersController = {
    login: function(req, res) {
        return res.render("login");
    },
    register: function(req, res) {
        return res.render("register");
    },
    profile: function(req, res) {
        return res.render("profile", {db: db});
    },
    profileEdit: function(req, res) {
        return res.render("profile-edit", {db: db});
    }
}

module.exports = usersController;