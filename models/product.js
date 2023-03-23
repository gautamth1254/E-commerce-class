const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        default:'/images/dummy.jpg',

    },
    price:{
        type:Number,
        min:0,
        // default:"price missing",
        required:true        
    },
    desc:{
        type:String,
        trim: true,
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,  // type jaane k liye kis type ka hai data
            ref:'Review' // riview wale 
        }
    ]
})

productSchema.post('findOneAndDelete' , function(){
    
})


let Product = mongoose.model('Product',productSchema);

module.exports = Product;
// Samarth0606
// ecommerce-g13