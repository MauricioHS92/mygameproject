// ========================================================
// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)
// ========================================================

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const saltRounds = 10;

const UserController = {
  formularioCriacao: (req, res) => {
    res.render("inscricao");
  },

  create: async (req, res) => {
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
    res.redirect("/inscricao");
  },

  renderFormCadastro: (req, res) => {
    // Verifica se o usuário está logado
    // Ou seja, se existe uma sessão para o usuário
    if (req.session.user != undefined) {
      // Se estiver logado, redireciona para a página restrita
      return res.redirect("/restrito");
    }

    // Renderiza a página de cadastro de usuário
    return res.render("formCadastro"); //Talvez seja correto colocar a pagina "inscricao" <<<<<<<<<<<<<<<<<
  },
};

module.exports = UserController;
