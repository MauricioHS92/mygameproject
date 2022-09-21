const {jogos} = require('../../models'); 

const comprasController = {
    checkout: (req, res) => {
        res.render('telaCheckout');
    }, 
    carrinho: (req, res) => {
        res.render('carrinhoDeCompras');
    },

    deletarJogo: (req, res) => {
        res.send('Você deletou o jogo: ');
    }
};



module.exports = comprasController;


