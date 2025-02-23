const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Importamos la conexión a la BD

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID, // ID único universal
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true, // El correo debe ser único
        validate: {
            isEmail: true // Valida que el formato sea de email
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Agrega `createdAt` y `updatedAt`
});

module.exports = User;
