const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts); // get route
router.route('/product/:id').get(getSingleProduct); // get singleproduct

module.exports = router; // exporting the module to use in another file