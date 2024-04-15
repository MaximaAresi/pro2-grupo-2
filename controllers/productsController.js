let productsController = {
    main: function (req, res) {
        return res.render("todos-productos");
    },
    detalle: function (req, res) {
        // let idProduct = req.params.id;

        /* dejo esto por ahora */
        return res.render("product");
    },
    productAdd: function (req, res) {
        return res.render("product-add")

    }
}

module.exports = productsController;