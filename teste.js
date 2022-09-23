const {Jogo} = require('./models')

const jogos = Jogo.findAll().then(response => console.log(response)).catch(error => console.log(error));