const Room = require("../models/room");

// Obtener todas las habitaciones
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las habitaciones", error });
    }
};

// Crear una habitación
exports.createRoom = async (req, res) => {
    try {
        const { hotelId, type, pricePerNight, availability } = req.body;
        const newRoom = await Room.create({ hotelId, type, pricePerNight, availability });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la habitación", error });
    }
};

// Eliminar una habitación
exports.deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByPk(id);
        if (!room) return res.status(404).json({ message: "Habitación no encontrada" });

        await room.destroy();
        res.json({ message: "Habitación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la habitación", error });
    }
};
