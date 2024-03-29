//
module.exports = (sequelize, DataType) => {
    //criar uma const jogos e retornar o nome do nosso model
    const Jogo = sequelize.define('Jogo', {
        //abaixo as colunas e suas configurações
        id_jogo: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        preco: DataType.FLOAT,
        genero: DataType.STRING,
        imagem: DataType.STRING,
        descricao: DataType.STRING
    },{
        tableName: 'jogos',
        timestamps: false
    })

    return Jogo
}