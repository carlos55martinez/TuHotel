const sequelize = require("./config/database");
const User = require("./models/user");

async function syncDB() {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea las tablas
    console.log("✅ Base de datos sincronizada");
  } catch (error) {
    console.error("❌ Error al sincronizar:", error);
  } finally {
    await sequelize.close();
  }
}

syncDB();
