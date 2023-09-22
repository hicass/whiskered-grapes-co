const Wine = require('../../models/wine');

module.exports = {
    index
}

async function index(req, res) {
    const wines = await Wine.find({});
    res.json(wines);
  }