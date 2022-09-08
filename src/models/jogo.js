const fs = require('fs'); 
const db = require('../database/db.json'); //importando o banco de dados


const jogo = {
    findById: (id) => {
        const jogo = db.jogos.find(jogo => jogo.id === id); //percorre o array e traz jogo por jogo
        return jogo;
    },
    
    findByName: (nome) => {
        const jogoAdd = db.jogos.find(jogo => jogo.nome === nome);
        return jogoAdd;
    },

    findAll: () => {    //função sem parametro pq traz todos os jogos
        const jogos = db.jogos;
        return jogos;
    },
    esportes: () => {
        const jogosEsportes = db.jogos.filter(function(atributo){
            return atributo.genero == 'esportes'
        })
    },
    estrategia: () => {
        const jogosEstrategia = db.jogos.filter(function(atributo){
            return atributo.genero == 'estrategia'
        })
    },
    outros: () => {
        const jogosOutros = db.jogos.filter(function(atributo){
            return atributo.genero == 'outros'
        })
    },
    fps: () => {
        const jogosFps = db.jogos.filter(function(atributo){
            return atributo.genero == 'fps'
        })
    }
}



module.exports = jogo;