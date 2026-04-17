const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, next) =>{

    const products = await ProductModel.find({});

    res.json({
        success: true,
        products
    })
}

exports.getSingleProduct = (req, res, next) =>{
    res.json({
        success: true,
        message: 'Get Single Product Working!'
    })
}

