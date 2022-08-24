const fs = require('fs');
const {v4} = require('uuid');
const db = require('../database/db.json');

const contatoController = {
    formularioFaleConosco: (req, res) => {
        res.render('faleConosco');
    },

    enviar: (req, res) => {
        const formFc = req.body;
        console.log('enviar')
        db.msgcontato.push({
            id: v4(),
            ...formFc, //... (spred operator) tira as propriedade de um objeto e coloco em outro
        });
        const json = JSON.stringify(db);
        fs.writeFileSync('src/database/db.json', json);
        res.redirect('/contato/faleConosco');
    }
}

module.exports = contatoController;