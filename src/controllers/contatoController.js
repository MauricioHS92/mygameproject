const contatoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },

    enviar: (req, res) => {
        const formFc = req.body;
    }
}

module.exports = contatoController;