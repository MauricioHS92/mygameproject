const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const UserController = require('../controllers/UserController')
const multer = require('multer');
const path = require('path');
const multerDiskStorage = multer.diskStorage({
    //destination:local em que o arquivo será armazenado
    destination: (req, file, callback)=>{
        const folder = path.join(__dirname, '../public/profile');
        callback(null, folder); //callback permite que o multer acesse essa informação
    },

    //qual será os nomes dos arquivos?
    filename: (req, file, callback) =>{
        const imageName = Date.now() + file.originalname;
        callback(null, imageName);
    },
});

 //finalmente a função que recebera os dados e passar para o storage usar o destination e o filename
 const upload = multer({ storage: multerDiskStorage });

router.get('/inscricao', UserController.formularioCriacao);
router.post('/create', UserController.create);

router.get('/meusDados/:id', usuarioController.meusDados);

router.get('/meuEndereco/:id', usuarioController.meuEndereco);

module.exports = router;