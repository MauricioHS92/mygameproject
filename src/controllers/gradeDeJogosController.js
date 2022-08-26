const gradeDeJogosController =  {
    viewPage: (req, res) =>{
        res.render('telaGradeDeJogos');
    },
    trazerJogos: (req, res) =>{
        const json = JSON.stringify(db);
        fs.writeFileSync('src/database/db.json', json);
    }
}

module.exports = gradeDeJogosController;