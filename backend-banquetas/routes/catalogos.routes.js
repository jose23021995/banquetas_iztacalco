const express = require('express');
const router = express.Router();
const { getFormConfig, buscarColonias } = require('../controllers/catalogos.controller');
const verificarToken = require('../middlewares/auth')

router.get('/config-formulario', verificarToken, getFormConfig);
router.get('/colonias/buscar', buscarColonias);

module.exports = router;
