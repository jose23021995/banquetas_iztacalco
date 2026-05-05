const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtenemos el token del "Bearer TOKEN"

    if (!token) {
        return res.status(403).json({ mensaje: "Token no proporcionado" });
    }

    try {
        // Asegúrate de que JWT_SECRET sea el mismo nombre que tienes en tu .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.usuario = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({ mensaje: "Token inválido o expirado" });
    }
};

module.exports = verificarToken;
