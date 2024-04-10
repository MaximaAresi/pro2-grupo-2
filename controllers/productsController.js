let productsController = {
    index: function(req, res) {
        return res.render("product");
}, 
    detalle: function(req, res) {
        // let idProduct = req.params.id;

        /* dejo esto por ahora */
        return res.render("search-results");
    }

}

module.exports = productsController;