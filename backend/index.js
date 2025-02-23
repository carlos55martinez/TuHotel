console.log("🚀 Iniciando servidor...");
require("dotenv").config(); // Carga variables de entorno

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/database"); // Importar la conexión a la base de datos
const User = require("./models/user"); // Importar modelo User

const app = express();
const PORT = process.env.PORT || 3000; // Usa el puerto de .env o 3000 por defecto

// Manejo de errores no controlados
process.on("uncaughtException", (err) => {
    console.error("❌ Error detectado:", err);
    process.exit(1); // Sale del proceso para evitar estado inconsistente
});

process.on("unhandledRejection", (err) => {
    console.error("❌ Promesa rechazada sin manejar:", err);
});

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Importar rutas
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const roomRoutes = require('./routes/roomRoutes');

// Usar las rutas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Bienvenido a Tu Hotel API 🏨🚀");
});

// Sincronizar base de datos y arrancar servidor
sequelize.sync({ force: false }) // Cambia a `true` si necesitas reiniciar la BD
    .then(() => {
        console.log("✅ Base de datos sincronizada");
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error("❌ Error al sincronizar la base de datos:", err));
