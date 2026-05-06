const jwt = require('jsonwebtoken');
const db = require('../config/db');
const bcrypt = require('bcrypt'); // 1. Importamos bcrypt

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }

        const usuario = rows[0];

        // 2. COMPARACIÓN SEGURA
        // bcrypt.compare recibe (password_del_formulario, password_encriptada_de_la_db)
        const passwordValida = await bcrypt.compare(password, usuario.password);

        if (!passwordValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // 3. Crear el Token (Igual que antes)
        const token = jwt.sign(
            { id: usuario.id_usuario, username: usuario.username },
            process.env.JWT_SECRET || 'tu_clave_secreta_super_segura', 
            { expiresIn: '24h' }
        );

        const { password: _, ...datosUsuario } = usuario;

        res.json({
            mensaje: 'Bienvenido al sistema',
            usuario: datosUsuario,
            token: token
        });

    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', detalle: error.message });
    }
};

module.exports = { login };
