const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true,

    },
})

let Product = mongoose.model('Product',productSchema);

module.exports = Product;
// Samarth0606
// ecommerce-g13