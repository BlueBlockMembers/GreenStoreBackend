//Import product model
let ProductModel = require('./../model/product.model');

//Add product
const addProduct = (req, res) => {

    const name = req.body.name;
    const description = req.body.description;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const image = req.body.image;

    console.log(req.body)

    //Create object from Product model
    const newProduct = new ProductModel({
        name,
        description,
        quantity,
        price,
        image
    })

    //Send the object to the db through the shema model using JS promise
    newProduct.save().then(() => {
        //If success
        res.json("Product Added.");

    }).catch((err) => {
        //If not success
        console.log(err);
    })

}

//Retrieve all products
const getAllProducts = (req, res) => {

    ProductModel.find().then((products) => {
        //If success
        res.json(products);

    }).catch((err) => {
        //If not success
        console.log(err);
    })
}

//Retrieve one seller
const getOneProduct = async (req, res) => {

    //Fetch the id to the veriable productId
    let productId = req.params.id;

    const pro = await ProductModel.findById(productId).then((product) => {

        //If success
        res.status(200).send({ status: "Product fetched", product});

    }).catch(() => {

        //If not success
        console.log(err.message);
        res.status(500).send({ status: "Error with get product", error: err.message });
    })

}

//Update product
const UpdateProduct = async (req, res) => {

    //Fetch the id to the veriable productId
    let productId = req.params.id;

    //Use destructure (Not using const name = req.body.name) to fatch the data send form frontend
    const { name, description, quantity, price, image } = req.body;

    //Object to update
    const updateProduct = {
        name,
        description,
        quantity,
        price,
        image
    }


    //Wait until the pomise recieve
    const update = await ProductModel.findByIdAndUpdate(productId, updateProduct).then(() => {

        //Send a response that update success
        res.status(200).send({ status: "Product updated" });

    }).catch((err) => {
        console.log(err);

        //send error to frontend 500 server error
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })

}

//Delete product
const deleteProduct = async (req, res) => {

    //Fetch the id to the veriable productId
    let productId = req.params.id;

    await ProductModel.findByIdAndDelete(productId).then(() => {

        //If success
        res.status(200).send({ status: "Product deleted" });
    }).catch((err => {

        //If not success
        console.log(err.message);

        //send error to frontend 500 server error
        res.status(500).send({ status: "Error with delete product", error: err.message });

    }))

}





module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    UpdateProduct,
    deleteProduct
}