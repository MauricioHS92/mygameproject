const carrinhoDeComprasController = {
    index: (req, res) => {
        res.render('carrinhoDeCompras');
    },
    finalizarCompra: (req, res) => {
        res.redirect('/carrinhoDeCompras/telaCheckout');
    }
};

module.exports = carrinhoDeComprasController;