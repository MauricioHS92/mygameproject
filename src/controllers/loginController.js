const loginModel = require('../models/loginModel');

const loginController = {
    formularioLogin: (req, res) => {
        res.render('telaLogin');
    },

    enter: (req, res) => {
        const loginUser = req.body;
        loginModel.enter(loginUser)
        res.redirect('/login/telaLogin');
    }
}


module.exports = loginController