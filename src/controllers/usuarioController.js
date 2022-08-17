const usuario = require('../models/usuario')

const usuarioController = {
    //primeiro metodo de usuario
    formularioCriacao: (req, res) => {  
        res.render('inscricao');
    },

    create: (req, res) => {  
        const usuarioDados = req.body;
        usuario.create(usuarioDados)
        res.redirect('/usuarios/inscricao')
    }
}

module.exports = usuarioController