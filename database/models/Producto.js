module.exports = function (sequelize, dataTypes) {

    /* alias del modelo de productos --> "Productos"*/
    let alias = "Productos";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        fotoProdcto: {
            type: dataTypes.STRING
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descripcionProducto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        }
    }

    /* config de la tabla */
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    }

    /* definir el modelo */
    let Productos = sequelize.define(alias, cols, config)

    return Productos;
}