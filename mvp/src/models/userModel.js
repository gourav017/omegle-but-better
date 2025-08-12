const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {type:String, reqired:true},
    age : {type:String,required:true}
})

const userModel = mongoose.model("usercheckxyz",userSchema)

module.exports = userModel