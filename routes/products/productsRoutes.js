let express = require('express');
const {reset} = require('nodemon');
const Product = require('../../models/product');

let router = express.Router();

router.get('/products', async (req, res) => {
    let products=await Product.find();
    res.render('product/index', {products});
})

router.get('/products/new',(req, res) => {
    res.render('product/new');
})

router.post('/products', async(req, res) => {
    let {name,img,price,desc} = req.body;
    await Product.create({name:name,img:img,price:price,desc});
    res.redirect('/products');

})

module.exports = router;