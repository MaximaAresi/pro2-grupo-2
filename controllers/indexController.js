let indexController = {
    index: function(req, res) {
        return res.render("index");
}, 
    login: function(req, res) {
        return res.render("login");
}, 
    register: function(req, res) {
        return res.render("register");
}, 
    profile: function(req, res) {
        return res.render("profile");
}
}

module.exports = indexController;