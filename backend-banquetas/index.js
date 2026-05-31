const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const fs = require('fs'); // Añadido para manejar carpetas
const multer = require('multer'); // Añadido para subida de archivos

const catalogosRoutes = require('./routes/catalogos.routes');
const authRoutes = require('./routes/auth.routes');
const seccionesRoutes = require('./routes/secciones.routes');

const app = express();

// --- CONFIGURACIÓN DE MULTER ---
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const ruta = path.join(__dirname, 'uploads/banquetas');
        // Crea la carpeta si no existe (importante)
        fs.mkdirSync(ruta, { recursive: true });
        cb(null, ruta);
    },
    filename: function (req, file, cb) {
        // Mantiene el nombre original. Si subes otro igual, Multer lo reemplaza.
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
// ------------------------------

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/catalogos', catalogosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/secciones', seccionesRoutes);

// --- RUTA PARA SUBIR IMÁGENES ---
// 'foto' debe ser el mismo nombre que uses en el FormData de Angular
app.post('/api/upload-banqueta', upload.single('foto'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No se recibió ninguna imagen' });
    }

    // Datos adicionales enviados desde Angular
    const { id_registro, proposito } = req.body;

    res.send({
        // nombreDeImagen: req.file.filename,
        //  message: 'Archivo guardado correctamente'.
        url_foto: `http://localhost:3000/uploads/banquetas/${req.file.filename}`,
        id_registro: id_registro,
        tipo: proposito,
       
    });
});
// --------------------------------

app.get('/', (req, res) => {
    res.send('Servidor de BANQUETAS_IZTACALCO funcionando 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
