const express = require('express')
const cors = require('cors')
const app =  express()
require('./DB/config')
const User = require('./DB/User');
const Product = require('./DB/Product')
app.use(express.json())
app.use(cors())

app.post('/register',async (req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result)

})

app.post('/login',async(req,res)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select('-password');
        if(user){
            res.send(user)
        }
        else{
            res.send('user not found')
        }
    }
    else{
        res.send('user not found')
    }
})

app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/product-list',async(req,res)=>{
    let products =await Product.find();
    if(products.length>0){
        res.send(products)
    }
    else{
        res.send({result:"Product Not Found"})
    }
})

app.get('/',(req,res)=>{
    res.send("Backend is working")
})

app.listen(5000)