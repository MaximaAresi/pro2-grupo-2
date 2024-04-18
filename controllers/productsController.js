const db =  require('../db/info')

let productsController = {
    main: function (req, res) {
        return res.render("todos-productos");
    },
    detalle: function (req, res) {
        // let idProduct = req.params.id;

        /* dejo esto por ahora */
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