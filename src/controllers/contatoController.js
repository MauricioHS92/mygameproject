const fs = require('fs');
const {v4} = require('uuid');
const db = require('../database/db.json');

const contatoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },

    enviar: (req, res) => {
        const formFc = req.body;
        db.msgcontato.push({
            id: v4(),
            ...formFc,
        });
        const json = JSON.stringify(db);
        fs.writeFileSync('src/database/db.json', json);
    }
}

module.exports = contatoController;