const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    quantity :{
        type: Number,
        required : true
    },
    price :{
        type: Number,
        required : true
    },
    image: {
        type: String,
        default: ''
    }

    
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product; 



/* productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema); */