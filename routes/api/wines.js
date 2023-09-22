const express = require('express');
const router = express.Router();
const winesCtrl = require('../../controllers/api/wines');

// GET /api/items
router.get('/', winesCtrl.index);

module.exports = router;