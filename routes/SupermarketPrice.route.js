const router = require("express").Router();
import {
    addSupermarketPrice,
    deleteSupermarketPrice,
    getAllSupermarketPrice,
    getOneSupermarketPrice,
    updateSupermarketPrice
} from '../controller/SupermarketPrice.controller'


//Create supermarket price operation
router.post("/add", addSupermarketPrice);

//Retrieve supermarket price operation (All supermarket price)
router.get("/", getAllSupermarketPrice);

//Retrieve supermarket price operation (One supermarket price)
router.get("/get/:id", getOneSupermarketPrice);

//Update supermarket price operation
router.put("/update/:id", updateSupermarketPrice);

//Delete supermarket price operation
router.delete("/delete/:id", deleteSupermarketPrice);

//Export module
module.exports = router;