const mysql = require('mysql2');
require('dotenv').config();

// Creamos un "Pool" de conexiones (más eficiente que una conexión única)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportamos la versión con "Promises" para usar async/await (más moderno)
module.exports = pool.promise();
