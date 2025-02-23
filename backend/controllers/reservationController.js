const Reservation = require("../models/reservation");

// Obtener todas las reservas
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las reservas", error });
    }
};

// Obtener una reserva por ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la reserva", error });
    }
};

// Crear una nueva reserva
exports.createReservation = async (req, res) => {
    try {
        const newReservation = await Reservation.create(req.body);
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la reserva", error });
    }
};

// Actualizar una reserva
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        await reservation.update(req.body);
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la reserva", error });
    }
};

// Eliminar una reserva
exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        await reservation.destroy();
        res.json({ message: "Reserva eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la reserva", error });
    }
};
