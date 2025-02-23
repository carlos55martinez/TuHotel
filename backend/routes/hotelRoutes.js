const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");

// Obtener todos los hoteles
router.get("/", hotelController.getAllHotels);

// Obtener un hotel por ID
router.get("/:id", hotelController.getHotelById);

// Crear un nuevo hotel
router.post("/", hotelController.createHotel);

// Actualizar un hotel
router.put("/:id", hotelController.updateHotel);

// Eliminar un hotel
router.delete("/:id", hotelController.deleteHotel);

module.exports = router;
