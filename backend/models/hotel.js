const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Hotel = sequelize.define("Hotel", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    pricePerNight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: "hotels",
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = Hotel;
