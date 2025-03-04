const mongoose = require('mongoose');


// defining the database structure using schema
const productSchema =new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numofReviews: String,
    createdAt: Date
});

const productModel = mongoose.model('product', productSchema); // it will create a schema using the model and return it.

module.exports = productModel;