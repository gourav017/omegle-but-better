const mongoose = require("mongoose");

const mydbConnection =()=>{
    try{
             mongoose.connect("mongodb://localhost:27017")
             console.log("mongodb connected succesful")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mydbConnection