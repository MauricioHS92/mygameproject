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
        console.log("usuario nao encontrado")
        // Se não existir, renderiza a página de login com erro
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
      
      }

      // Verifica se a senha informada é a mesma que a senha criptografada no db
      const senhaValida = bcrypt.compareSync(senha, usuario.senha);

      // Verifica se a senha é válida
      if (!senhaValida) {
        console.log("senhainvalida")
        // Se a senha for inválida, renderiza a página de login com erro
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
       
      }
      // Se o email e a senha forem válidos, cria uma sessão para o usuário
      // Salvando o email e o id do usuário na sessão
      req.session.user = { email: usuario.email, id: usuario.id_usuario };

      // Redireciona para a página restrita
      return res.redirect('/telaPrincipalUsuario');
    } catch (error) {
      console.log(error);
    }
  },

  logout: (req, res) => {
    // Destroi a sessão do usuário
    req.session.destroy();

    // Redireciona para a página inicial
    return res.redirect("/home");
  }
}

module.exports = UserController;
