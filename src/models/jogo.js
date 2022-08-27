const fs = require('fs'); 
const db = require('../database/db.json'); //importando o banco dde dados


const jogo = {
    findById: (id) => {
        const jogo = db.jogos.find(jogo => jogo.id === id); //percorre o array e traz jogo por jogo
        return jogo;
    },
    findAll: () => {    //função sem parametro pq traz todos os jogos
        const jogos = db.jogos;
        return jogos;
    }
}

module.exports = jogo;