const fs = require('fs');
const {v4} = require('uuid');
const db = require('../database/db.json');

const writeToDb = () => {
    const json = JSON.stringify(db);
        fs.writeFileSync('src/database/db.json', json);
}

const usuario = {
    create: (usuarioDados) => {
        db.usuarios.push({
            id: v4(),
            ...usuarioDados,
        });        
        writeToDb()
    } 
}

module.exports = usuario;