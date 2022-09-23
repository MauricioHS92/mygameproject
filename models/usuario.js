module.exports = (sequelize, DataType) => {
    //criar uma const jogos e retornar o nome do nosso model
    const Usuario = sequelize.define('Usuario', {
        //abaixo as colunas e suas configurações
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataType.STRING,
        senha: DataType.STRING,
        nome: DataType.STRING,
        cpf: DataType.STRING,
        telefone: DataType.STRING,
        foto_usuario: DataType.STRING

    },{
        tableName: 'usuarios',
        timestamps: false
    })

    return Usuario
};