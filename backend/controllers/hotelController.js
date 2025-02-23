const Hotel = require("../models/hotel");

// Obtener todos los hoteles
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener hoteles", error });
    }
};

// Obtener un hotel por ID
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel no encontrado" });
        }
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener hotel", error });
    }
};

// Crear un nuevo hotel
exports.createHotel = async (req, res) => {
    try {
        const { name, location, description, pricePerNight } = req.body;
        const newHotel = await Hotel.create({ name, location, description, pricePerNight });
        res.status(201).json(newHotel);
    } catch (error) {
        res.status(500).json({ message: "Error al crear hotel", error });
    }
};

// Actualizar un hotel
exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel no encontrado" });
        }

        await hotel.update(req.body);
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar hotel", error });
    }
};

// Eliminar un hotel
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel no encontrado" });
        }

        await hotel.destroy();
        res.json({ message: "Hotel eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar hotel", error });
    }
};
