const db =  require('../database/models')/*../db/info */

let filtrado = {
    include: [
        {association:"comentarios"}
    ]
}

let productsController = {
    detalle: function (req, res) {
        return res.render("product", {db: db});
    },
    productAdd: function (req, res) {
        return res.render("product-add", {db: db})
    },
    search: function (req, res) {
        return res.render("search-results", {db: db})
    }
}

module.exports = productsController;