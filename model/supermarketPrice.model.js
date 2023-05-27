const mongoose = require('mongoose');

const supermarketPriceSchema = mongoose.Schema({
    superMarketPriceID: {
        type: String, required: true,
    }, itemId: {
        type: mongoose.Schema.Types.ObjectId, required: true,
    }, itemName: {
        type: String, required: true
    }, yesterDayPrice: {
        type: String, default: '0.00'
    }, toDayPrice: {
        type: String, default: '0.00'
    },
}, {
    timestamps: true,
})

const SuperMarketPrice = mongoose.model('SupermarketPrice', supermarketPriceSchema);

module.exports = SuperMarketPrice;