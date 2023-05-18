//Import supermarket price model
const SupermarketPriceModel = require('./../model/product.model');

const addSupermarketPrice = async (req, res) => {
    const {itemId, itemName, yesterDayPrice, toDayPrice} = req.body;

    const priceList = await SupermarketPriceModel.find();
    const priceRecordCount = priceList.length;
    const autoGenerateSuperMarketPriceID = `SUM${priceRecordCount + 1}`;

    const newPrice = new SupermarketPriceModel({
        superMarketPriceID: autoGenerateSuperMarketPriceID, itemId, itemName, yesterDayPrice, toDayPrice
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
const updateSupermarketPrice = async (req, res) => {
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
const deleteSupermarketPrice = async (req, res) => {
    const priceID = req.params.id

    try {
        const result = await SupermarketPriceModel.findOneAndDelete({superMarketPriceID: priceID});
        res.status(200).send({message: "Supermarket Price deleted successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}
const getAllSupermarketPrice = async (req, res) => {
    try {
        const result = await SupermarketPriceModel.find();
        res.status(200).send({message: "All Super market price list", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}
const getOneSupermarketPrice = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await SupermarketPriceModel.findOne({superMarketPriceID: id});
        res.status(200).send({message: "Super market found", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

module.exports = {
    addSupermarketPrice, updateSupermarketPrice, deleteSupermarketPrice, getAllSupermarketPrice, getOneSupermarketPrice,
}