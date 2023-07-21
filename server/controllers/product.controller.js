const  {Product}  = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // Create a new product
module.exports.createProduct = (request, response) => {
    // const { title, price, description } = request.body;
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err=>response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.findOneAndDelete({_id: request.params.id})
   .then(deletedProduct => response.json(deletedProduct))
   .catch(err=>response.json(err))
}
