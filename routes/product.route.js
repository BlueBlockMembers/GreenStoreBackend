const router = require("express").Router();
const {addProduct,getAllProducts,getOneProduct,UpdateProduct,deleteProduct} = require('./../controller/product.controller');

//Create product operation
router.post("/add", addProduct);

//Retrieve product operation (All products)
router.get("/", getAllProducts);

//Retrieve product operation (One product)
router.get("/get/:id", getOneProduct);

//Update product operation
router.put("/update/:id", UpdateProduct);

//Delete product operation
router.delete("/delete/:id", deleteProduct);

//Export module
module.exports = router;