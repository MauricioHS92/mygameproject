module.exports = (sequelize, DataType) => {
    //Const compras será usada no controller
    const Compra = sequelize.define('Compra', {
        //abaixo as colunas e suas configurações
        id_compra: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataType.INTEGER,
            autoIncrement: false
        },

        data_compra: DataType.DATE,
        status_compra: DataType.STRING,

    },{
        tableName: 'compras',
        timestamps: false
    })

    return Compra
}