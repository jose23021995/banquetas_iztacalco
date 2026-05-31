const express = require('express');
const router = express.Router();
const { obtenerSeccionesPorColonia } = require('../controllers/secciones.controller');

router.get('/por-colonia/:id_colonia', obtenerSeccionesPorColonia);
router.get('/por-colonia', obtenerSeccionesPorColonia);

module.exports = router;
