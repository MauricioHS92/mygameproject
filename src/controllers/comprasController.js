const comprasController = {
    checkout: (req, res) => {
        res.render('telaCheckout');
    }, 
    carrinho: (req, res) => {
        res.render('carrinhoDeCompras');
    },
};

module.exports = comprasController;


