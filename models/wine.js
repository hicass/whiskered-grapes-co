const mongoose = require('mongoose');
const wineSchema = require('./wineSchema');

module.exports = mongoose.model('Wine', wineSchema);