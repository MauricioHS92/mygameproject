// ========================================================
// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)
// ========================================================

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const usuario = require('../models/usuario')


const saltRounds = 10;

const UserController = {
  formularioCriacao: (req, res) => {
    res.render("inscricao");
  },

  create: async (req, res) => {
    console.log("aqui create");
    // Pega os dados do usuário do corpo da requisição
    const { email, senha, nome, cpf, telefone } = req.body;

    // Faz a criptografia da senha
    const hash = bcrypt.hashSync(senha, saltRounds);

    // Chama a model para criar um novo usuário
    // Passando o email e a senha criptografada
      await User.create({
      email: email,
      senha: hash,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
    });

    // Redireciona para a página de login
    res.redirect("/login");
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
  },

    

 };

module.exports = UserController;