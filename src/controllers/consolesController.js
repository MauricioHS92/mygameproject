const { Console } = require("../../models");

const consolesController = {
    trazerConsoles: async (req, res) => {
      try {
        const consoles = await Console.findAll();
        res.render("telaGradeDeConsoles", { consoles });
        console.log(consoles);
      } catch (error) {
        console.log(error);
      }
    },

    
    //Criando método de selecionar o console
  escolherConsole: async (req, res) => {
    try {
      const { id } = req.params;
      const console = await Console.findByPk(id);
      res.render("telaDeConsole", { console });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = consolesController;
