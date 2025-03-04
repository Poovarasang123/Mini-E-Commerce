const ProductModel = require('../models/productModel');

// get products API - /api/v1/produts
exports.getProducts = async (req , res ,next) => {

    // regex is used to find a component in the DB req.query.keyword is a syntax to find value and options is to ignore the case
    const query = req.query.keyword?{ name : {
        $regex: req.query.keyword,
        $options: 'i'
       }
    } : {}
    const products = await ProductModel.find(query); // used to fetch all the data in database

    res.json({
        success: true,
        products
    })
}
// get Single product API - /api/v1/produt/:id
exports.getSingleProduct =  async (req , res ,next) => {
    // if we try to find a invalid id then the app will crash so that we used try catch to slove it.
    try{
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    }catch(error){
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
    console.log(req.params.id,"ID");
}