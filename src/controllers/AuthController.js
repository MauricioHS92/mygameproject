// ========================================================
// Controller responsável por gerenciar a sessão do usuário
// (Ex: login, logout)
// ========================================================

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const AuthController = {
  //renderiza a tela de login
  formularioLogin: (req, res) => {
    //verifica se o usuário está logado
    if (req.session.user != undefined) {
      return res.redirect('/telaPrincipalUsuario')
    }

    return res.render("telaLogin", { error: null });
  },

  login: async (req, res) => {
    try {
      // Pega os dados do usuário do corpo da requisição
      const { email, senha } = req.body;

      // Chama a model para buscar um usuário pelo email
      const usuario = await User.findOne({ where: { email: email } });
      console.log(usuario)

      // Verifica se o usuário existe
      if (!usuario) {
        // Se não existir, renderiza a página de login com erro
        
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
      
      }

      // Verifica se a senha informada é a mesma que a senha criptografada no db
      const senhaValida = bcrypt.compareSync(senha, usuario.senha);
      console.log(senhaValida)

      // Verifica se a senha é válida
      if (!senhaValida) {
        // Se a senha for inválida, renderiza a página de login com erro
        console.log('Senha inválida')
        return res.render("telaLogin", { error: "Email ou senha inválidos" });
        
       
      }
      // Se o email e a senha forem válidos, cria uma sessão para o usuário
      // Salvando o email e o id do usuário na sessão
      
      req.session.user = { email: usuario.email, id: usuario.id_usuario };
      console.log('saiu')

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
  },

  userPerfil: async (req, res) => {
    try {
      const user = req.session.user
      res.render("telaPrincipalUsuario", { user })
    } catch (error) {
      console.log(error)
    }
}
}

module.exports = AuthController;
