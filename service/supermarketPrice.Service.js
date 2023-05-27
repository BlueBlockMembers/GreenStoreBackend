//Import supermarket price model
const SupermarketPriceModel = require('../model/supermarketPrice.model');

const add = async (req, res) => {
    console.log(req.body)
    const {itemID, itemName, yesterDayPrice, toDayPrice} = req.body;

    const priceList = await SupermarketPriceModel.find();
    const priceRecordCount = priceList.length;
    const autoGenerateSuperMarketPriceID = `SUM${priceRecordCount + 1}`;

    const newPrice = new SupermarketPriceModel({
        superMarketPriceID: autoGenerateSuperMarketPriceID, itemId: itemID, itemName, yesterDayPrice, toDayPrice
    })

    newPrice.save().then((result) => {
        res
            .status(200)
            .json({
                message: "Supermarket Price added successfully", result: {
                    data: result, response: true,
                },
            })
    })
}
const update = async (req, res) => {
    const priceID = req.params.id
    const {itemId, itemName, yesterDayPrice, toDayPrice} = req.body;

    try {
        const result = await SupermarketPriceModel.findOneAndUpdate({superMarketPriceID: priceID}, {
            superMarketPriceID: priceID, itemId, itemName, yesterDayPrice, toDayPrice
        });
        res.status(200).send({message: "Supermarket Price updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}
const deleteSupermarket = async (req, res) => {
    const priceID = req.params.id

    try {
        const result = await SupermarketPriceModel.findOneAndDelete({superMarketPriceID: priceID});
        res.status(200).send({message: "Supermarket Price deleted successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}
const getAll = async (req, res) => {
    const result = await SupermarketPriceModel.find();
    try {
        if (result) {
            res.status(200).send({message: "All Super market price list", data: result});
        }
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}
const search = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await SupermarketPriceModel.findOne({superMarketPriceID: id});
        res.status(200).send({message: "Super market found", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

module.exports = {
    add, update, deleteSupermarket, getAll, search,
}