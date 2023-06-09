const mongoose=require('mongoose');
const Product=require('./models/product');
const products=[
    {
        name:"iphone 14 pro",
        img:"https://images.unsplash.com/photo-1676738386453-4785abee2d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        price:"1400000",
        desc:"bogot mehgaa"
    },
    {
        name:"macbook pro pro",
        img:"https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        price:"1400000",
        desc:"bogot mehgaa"
    },
    {
        name:"ipad pro",
        img:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
        price:"1400000",
        desc:"bogot mehgaa"
    },
]

async function seedDB(){
    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log("DB SEEDED");
}
module.exports =  seedDB;
