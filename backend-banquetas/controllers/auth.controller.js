const jwt = require('jsonwebtoken'); // 1. Importar la librería
const db = require('../config/db');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }

        const usuario = rows[0];

        if (usuario.password !== password) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // 2. Crear el Token
        // Guardamos el id y el username dentro del token
        const token = jwt.sign(
            { id: usuario.id_usuario, username: usuario.username },
            'tu_clave_secreta_super_segura', // Esta clave debería ir en el .env
            { expiresIn: '24h' } // El pase dura 24 horas
        );

        const { password: _, ...datosUsuario } = usuario;
        
        // 3. Enviamos el token al cliente
        res.json({
            mensaje: 'Bienvenido al sistema',
            usuario: datosUsuario,
            token: token // <--- Aquí va el pase VIP
        });

    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

module.exports = { login };
