const db =  require('../db/info')

let indexController = {
    main: function (req, res) {
        return res.render("index", {db: db});
    }
}

module.exports = indexController;