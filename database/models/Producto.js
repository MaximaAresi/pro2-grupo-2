module.exports = function (sequelize, dataTypes) {

    /* alias del modelo de producto --> "Productos"*/
    let alias = "Producto";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        fotoProducto: {
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
    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = function (models) {
        Producto.hasMany(models.Comentario, {
            as: "comentarios"
        }),
            Producto.belongsTo(models.Usuario, {
                as: "usuarios",
                foreignKey: "id_usuario"
            })

        return Producto;
    }
}