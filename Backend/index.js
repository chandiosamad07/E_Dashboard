const express = require('express')
const app =  express()
require('./DB/config')
const User = require('./DB/User');

app.use(express.json())

app.post('/register',async (req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    res.send(result)

})

app.get('/',(req,res)=>{
    res.send("Backend is working")
})

app.listen(5000)