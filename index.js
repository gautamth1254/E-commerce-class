const express = require('express');
const app = express();
let path = require('path');
const mongoose = require('mongoose');
// const 
//let User = require('./models/product');


mongoose.set('strictQuery',true)
let seedDB = require('./seed');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceclass')
.then(()=>{
    console.log("Connection-Open")
})

.catch((err)=>{
    console,log("Something went wrong");
    console.log(err);
})

seedDB();

//app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}))

let port = 5000;
app.listen(port,()=>{
    console.log(`server connected at port ${port}`);
})