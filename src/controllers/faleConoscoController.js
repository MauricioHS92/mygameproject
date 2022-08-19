const faleConoscoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },

    enviar: (req, res) => {
        const form = req.body;
    }
}

module.exports = faleConoscoController;