const carrinhoDeComprasController = {
    index: (req, res) => {
        res.render('carrinhoDeCompras');
    },
    finalizarCompra: (req, res) => {
        res.redirect('/checkout');
    }
};

module.exports = carrinhoDeComprasController;