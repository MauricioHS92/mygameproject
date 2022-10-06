// ========================================================
// Controller responsável por gerenciar a sessão do usuário
// (Ex: login, logout)
// ========================================================

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const UserController = {
  //renderiza a tela de login
  formularioLogin: (req, res) => {
    res.render("telaLogin");
  },

  login: async (req, res) => {
    try {
      // Pega os dados do usuário do corpo da requisição
      const { email, senha } = req.body;

      // Chama a model para buscar um usuário pelo email
      const usuario = await User.findOne({ where: { email: email } });

      // Verifica se o usuário existe
      if (!usuario) {
        // Se não existir, renderiza a página de login com erro
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
        //res.send("Email ou senha inválido")
      }

      // Verifica se a senha informada é a mesma que a senha criptografada no db
      const senhaValida = await User.findOne({ where: { senha: senha } });

      // Verifica se a senha é válida
      if (!senhaValida) {
        // Se a senha for inválida, renderiza a página de login com erro
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
        // res.send("Email ou senha inválido")
      }
      //console.log('Login deu certo')
      

      // Se o email e a senha forem válidos, cria uma sessão para o usuário
      // Salvando o email e o id do usuário na sessão
      // req.session.user = { email: usuario.email, id: usuario.id };

      // Redireciona para a página restrita
      // return res.redirect('/restrito');
    } catch (error) {
      console.log(error);
    }
    return res.render("telaPrincipalUsuario");
  },

  //logout: (req, res) => {
    // Destroi a sessão do usuário
    //req.session.destroy();

    // Redireciona para a página inicial
    //return res.redirect("/");
  //}
};

module.exports = UserController;
