const { Pool } = require("pg");
require("dotenv").config();

// Si no existe DATABASE_URL en el .env, se lanza un error en lugar de exponer credenciales
if (!process.env.DATABASE_URL) {
  throw new Error("ERROR: La variable de entorno DATABASE_URL no está configurada en el archivo .env");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = { pool };