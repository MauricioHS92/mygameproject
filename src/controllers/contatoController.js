const usuario = require('../models/contato')


const contatoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },
    enviar: (req, res) => {
        const formFC = req.body;
        contato.enviar(formFC)
        res.redirect('/contato')
    }
}

module.exports = contatoController;