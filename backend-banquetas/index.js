const express = require('express');
const cors = require('cors');
require('dotenv').config();
const catalogosRoutes = require('./routes/catalogos.routes');
const authRoutes = require('./routes/auth.routes');
const jwt = require('jsonwebtoken');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/catalogos', catalogosRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Servidor de BANQUETAS_IZTACALCO funcionando 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
