const {Contato} = require('../../models')


const contatoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },
    
    create: async (req, res) => {
        // Pega os dados do contato do corpo da requisição
        const { nome, email, msg } = req.body;
             
        // Chama a model para criar um contato
        
          await Contato.create({
            nome: nome,
            email: email,
            msg: msg,
                    
        });
    
        // Redireciona para a página de login
        res.redirect("/faleconosco");
      }
}

module.exports = contatoController;