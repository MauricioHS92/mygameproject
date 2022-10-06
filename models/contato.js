module.exports = (sequelize, DataType) => {
    //const Contato sera usada no controller
    const Contato = sequelize.define('Contato', {
        //abaixo as colunas e suas configurações
        id_contato: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: DataType.STRING,
        msg: DataType.STRING

        
    },{
        tableName: 'contato',
        timestamps: false
    })

    return Contato
};