// ========================================================
// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)
// ========================================================

const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../../models");

const usuario = require('../models/usuario')




const UserController = {
  home: (req, res) => {
    res.render('home')
  },
  
  formularioCriacao: (req, res) => {
    res.render("inscricao");
  },

  create: async (req, res) => {
   
    // Pega os dados do usuário do corpo da requisição
    const { email, senha, nome, cpf, telefone } = req.body;

    // Faz a criptografia da senha
    // const passwordToString = senha.toString()
    console.log(senha)
    // const hash = bcrypt.hashSync(senha, saltRounds);

    // Chama a model para criar um novo usuário
    // Passando o email e a senha criptografada
      await User.create({
      email: email,
      senha: senha,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
    });

    // Redireciona para a página de login
    res.redirect("/login");
  },

    meusDados: async (req, res) => {
      const user = req.session.user
      const userLogin = await User.findOne({where:{email:user.email}})
      res.render('perfilDoUsuarioMeusDados', {user, userLogin});
  },
    meuEndereco: (req, res) => {
      const { id } = req.params;
      const userEndereco = usuario.findById(id);
      res.render('perfilDoUsuarioMeuEndereco', { userEndereco });
  },

    editarDados: async (req, res) => {
      const user = req.session.user
      const {nome, cpf, telefone, email} = req.body;

      await User.update(
        { nome, cpf, telefone, email },
    { where: { email: user.email }
  });

   res.render('telaPrincipalUsuario');
  }
 };

module.exports = UserController;