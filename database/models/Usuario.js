module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        DNI: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscore: false
    }
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_usuario"
        }) 
        }  
    return Usuario;
}
