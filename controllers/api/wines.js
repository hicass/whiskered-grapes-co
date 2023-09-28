const Wine = require('../../models/wine');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const wines = await Wine.find({});
    res.json(wines);
}

async function show(req, res) {
    const wine = await Wine.findById(req.params.id);
    res.json(wine);
}