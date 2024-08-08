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

app.delete('/delete/:id',async(req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get('/product/:id',async(req,res)=>{
    const { id } = req.params;
   
    let result = await Product.findOne({_id:id})
    if(result){
        res.send(result)
    }
    else{
        res.send({result : "No record Found"})
    }
})

app.put('/product/:id', async (req,res)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result);
})

// app.get('/',(req,res)=>{
//     res.send("Backend is working")
// })

app.listen(5000)