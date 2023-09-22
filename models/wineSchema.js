const Schema = require('mongoose').Schema;

const wineSchema = new Schema({
    name: { type: String, requied: true },
    image: { type: String, requied: true },
    alcohol_content: { type: Number, required: true },
    price: { type: Number, required: true },
    allergens: { type: String, required: true },
    conservation: { type: String, required: true },
    taste: { type: String, required: true },
    pairing: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = wineSchema;