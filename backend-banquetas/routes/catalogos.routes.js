const express = require('express');
const router = express.Router();
const { getFormConfig } = require('../controllers/catalogos.controller');

router.get('/config-formulario', getFormConfig);

module.exports = router;
