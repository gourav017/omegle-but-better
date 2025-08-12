const express = require("express")
const userSchema = require("../models/userModel")
const userRouter = express.Router();

userRouter.get('/',async(req,res)=>{
    const alluser = await userSchema.find()
    res.send({alluser})
})

userRouter.post("/",async(req,res)=>{
    console.log(req.body);
    
    const {name,age} = req.body  
    
    const user  = await userSchema.create({name,age})
    res.send({msg:"added a user", user})
})

module.exports  = userRouter