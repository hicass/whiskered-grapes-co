const express = require('express');
const router = express.Router();
const winesCtrl = require('../../controllers/api/wines');

router.get('/', winesCtrl.index);
router.get('/:id', winesCtrl.show);

module.exports = router;