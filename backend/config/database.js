require("dotenv").config();
const { Sequelize } = require("sequelize");

console.log("🔍 Intentando conectar a PostgreSQL...");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: console.log, // Activa logs SQL
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a PostgreSQL exitosamente");
  } catch (error) {
    console.error("❌ Error al conectar a PostgreSQL:", error);
  }
}

testConnection();

module.exports = sequelize;




