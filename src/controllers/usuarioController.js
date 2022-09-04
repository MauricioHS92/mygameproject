const usuario = require('../models/usuario')

const usuarioController = {
    //primeiro metodo de usuario
    formularioCriacao: (req, res) => {
        res.render('inscricao');
    },

    create: (req, res) => {
        const usuarioDados = req.body;
        usuario.create(usuarioDados)
        res.redirect('/usuarios')
    },

    meusDados: (req, res) => {
        const { id } = req.params;
        const userDados = usuario.findById(id);
        res.render('perfilDoUsuarioMeusDados', { userDados });
    },
    meuEndereco: (req, res) => {
        const { id } = req.params;
        const userEndereco = usuario.findById(id);
        res.render('perfilDoUsuarioMeuEndereco', { userEndereco });
    }
}

module.exports = usuarioController