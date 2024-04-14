let productsController = {
    main: function (req, res) {
        return res.render("product");
    },
    detalle: function (req, res) {
        // let idProduct = req.params.id;

        /* dejo esto por ahora */
        return res.render("search-results");
    },
    productAdd: function (req, res) {
        return res.render("product-add")

    }
}

module.exports = productsController;