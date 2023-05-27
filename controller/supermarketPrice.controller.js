//Import supermarket price model
const SupermarketPriceModel = require('./../model/product.model');
let {add, update, deleteSupermarket, search, getAll} = require('../service/supermarketPrice.Service');
const addSupermarketPrice = async (req, res) => {
    await add(req, res)
}
const updateSupermarketPrice = async (req, res) => {
    await update(req, res);
}
const deleteSupermarketPrice = async (req, res) => {
    await deleteSupermarket(req, res);
}
const getAllSupermarketPrice = async (req, res) => {
    await getAll(req, res);
}
const getOneSupermarketPrice = async (req, res) => {
    await search(req, res);
}

module.exports = {
    addSupermarketPrice, updateSupermarketPrice, deleteSupermarketPrice, getAllSupermarketPrice, getOneSupermarketPrice,
}