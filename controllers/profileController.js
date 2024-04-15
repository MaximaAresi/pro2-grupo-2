const db =  require('../db/info')

let profileController = {
    main: function(req, res) {
        return res.render("profile", {db: db});
    },
    edit: function(req, res) {
        return res.render("profile-edit", {db: db});
    }
}

module.exports = profileController;