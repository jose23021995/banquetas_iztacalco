const db = require('../config/db');

const obtenerSeccionesPorColonia = async (req, res) => {
    try {
        const idColonia = req.params.id_colonia || req.query.id_colonia;

        if (!idColonia) {
            return res.status(400).json({ error: 'id_colonia es requerido' });
        }

        const [secciones] = await db.query(
            'SELECT id_seccion AS id, nombre FROM secciones WHERE id_colonia = ? ORDER BY nombre ASC',
            [idColonia]
        );

        res.json({ secciones });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { obtenerSeccionesPorColonia };
