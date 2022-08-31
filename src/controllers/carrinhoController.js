const carrinhoController = {
    index: (req, res) => {
        res.render('carrinhoDeCompras', {jogos: []});
    },

}

module.exports = carrinhoController