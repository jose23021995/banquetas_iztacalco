const db = require('../config/db');

const getFormConfig = async (req, res) => {
    try {
        const [resColores] = await db.query('SELECT id_color AS id, nombre FROM colores ORDER BY nombre ASC');
        const [resFachada] = await db.query('SELECT id_material_fachada AS id, nombre FROM materiales_fachada ORDER BY nombre ASC');
        const [resPuerta] = await db.query('SELECT id_material_puerta AS id, nombre FROM materiales_puerta ORDER BY nombre ASC');
        const [resColonias] = await db.query('SELECT id_colonia AS id, nombre FROM colonias ORDER BY nombre ASC');

        res.json({
            colores: resColores,
            materialesFachada: resFachada,
            materialesPuerta: resPuerta,
            colonias: resColonias
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getFormConfig };
