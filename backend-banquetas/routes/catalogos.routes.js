const express = require('express');
const router = express.Router();
const { getFormConfig } = require('../controllers/catalogos.controller');
const verificarToken = require('../middlewares/auth')

router.get('/config-formulario',verificarToken , getFormConfig);

module.exports = router;
