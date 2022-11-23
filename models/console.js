module.exports = (sequelize, DataType) => {
    //criar uma const jogos e retornar o nome do nosso model
    const Console = sequelize.define('Console', {
        //abaixo as colunas e suas configurações
        id_console: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        preco: DataType.FLOAT,
        imagem: DataType.STRING,
        tipo: DataType.STRING
    },{
        tableName: 'consoles',
        timestamps: false
    })

    return Console
}