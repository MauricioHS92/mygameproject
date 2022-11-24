module.exports = (sequelize, DataType) => {
    //Const compras será usada no controller
    const Compras = sequelize.define('Compras', {
        //abaixo as colunas e suas configurações
        id_compra: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_compra: DataType.DATE,
        status_compra: DataType.FLOAT,

    },{
        tableName: 'compras',
        timestamps: false
    })

    return Compras
}