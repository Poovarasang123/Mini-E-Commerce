const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
exports.createOrder = async (req , res ,next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc , item) => (acc + item.product.price * item.qty),0)).toFixed(2); // reduce is used to get a single value from the array , acc is the previous value , with previous value we add the price to get amount , 0 is the initial value of amount.
    const status = 'pending';
    const order = await orderModel.create({cartItems,amount,status})

    // updating the product stock 
    cartItems.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })
    res.json({
        success: true,
        order
    })
}