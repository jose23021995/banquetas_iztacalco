const db = require('../config/db');

const normalizeColoniaQuery = (text = '') => {
    return text
        .trim()
        .replace(/^(?:(colonia|col\.|ampliaci[oó]n|secci[oó]n)\s+)+/i, '')
        .replace(/\s+/g, ' ')
        .trim();
};

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

const buscarColonias = async (req, res) => {
    try {
        const queryText = normalizeColoniaQuery(req.query.q || req.query.query || '');

        // Si no hay búsqueda, devuelve TODAS las colonias
        if (!queryText) {
            const [todas] = await db.query(
                'SELECT id_colonia AS id, nombre FROM colonias ORDER BY nombre ASC'
            );
            return res.json({ colonias: todas });
        }

        // Búsqueda 1: Por texto completo normalizado
        const likeQuery = `%${queryText}%`;
        let [colonias] = await db.query(
            'SELECT id_colonia AS id, nombre FROM colonias WHERE nombre LIKE ? ORDER BY LENGTH(nombre) ASC, nombre ASC',
            [likeQuery]
        );

        // Búsqueda 2: Si no encuentra, intenta con las últimas 3 palabras
        if (colonias.length === 0) {
            const palabras = queryText.split(' ').filter(Boolean);
            if (palabras.length > 1) {
                const ultimasPalabras = palabras.slice(-3).join(' ');
                const [fallback1] = await db.query(
                    'SELECT id_colonia AS id, nombre FROM colonias WHERE nombre LIKE ? ORDER BY LENGTH(nombre) ASC, nombre ASC',
                    [`%${ultimasPalabras}%`]
                );
                if (fallback1.length > 0) return res.json({ colonias: fallback1 });
            }
        }

        // Búsqueda 3: Si aún no encuentra, intenta con la última palabra
        if (colonias.length === 0) {
            const palabras = queryText.split(' ').filter(Boolean);
            if (palabras.length > 0) {
                const ultimaPalabra = palabras[palabras.length - 1];
                const [fallback2] = await db.query(
                    'SELECT id_colonia AS id, nombre FROM colonias WHERE nombre LIKE ? ORDER BY LENGTH(nombre) ASC, nombre ASC',
                    [`%${ultimaPalabra}%`]
                );
                if (fallback2.length > 0) return res.json({ colonias: fallback2 });
            }
        }

        // Búsqueda 4: Intenta con la primera palabra
        if (colonias.length === 0) {
            const palabras = queryText.split(' ').filter(Boolean);
            if (palabras.length > 0) {
                const primeraPalabra = palabras[0];
                const [fallback3] = await db.query(
                    'SELECT id_colonia AS id, nombre FROM colonias WHERE nombre LIKE ? ORDER BY LENGTH(nombre) ASC, nombre ASC',
                    [`%${primeraPalabra}%`]
                );
                if (fallback3.length > 0) return res.json({ colonias: fallback3 });
            }
        }

        res.json({ colonias });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getFormConfig, buscarColonias };
