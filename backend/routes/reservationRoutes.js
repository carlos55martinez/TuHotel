const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController"); // Asegúrate de que este archivo existe

// Obtener todas las reservas
router.get("/", reservationController.getAllReservations);

// Obtener una reserva por ID
router.get("/:id", reservationController.getReservationById);

// Crear una nueva reserva
router.post("/", reservationController.createReservation);

// Actualizar una reserva
router.put("/:id", reservationController.updateReservation);

// Eliminar una reserva
router.delete("/:id", reservationController.deleteReservation);

module.exports = router;
