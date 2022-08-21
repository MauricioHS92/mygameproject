const fs = require('fs');
const {v4} = require('uuid');
const db = require('../database/db.json');

const writeToDb = () => {
    const json = JSON.stringify(db);
        fs.writeFileSync('src/database/db.json', json);
}

const loginModel = {
    enter: (loginUser) => {
        db.login.push({
            id: v4(),
            ...loginUser, // O ... (spred operator) tira as propriedade de um objeto e coloco em outro
        });      
        writeToDb()
    }
}

module.exports = loginModel;