const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Hotel = require("./hotel"); // Relación con Hotel

const Room = sequelize.define("Room", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hotel,
            key: "id",
        },
        onDelete: "CASCADE",
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pricePerNight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: "rooms",
    timestamps: true,
});

Room.belongsTo(Hotel, { foreignKey: "hotelId", as: "hotel" });

module.exports = Room;
