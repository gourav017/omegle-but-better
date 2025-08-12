
const express = require("express");
const app  = express();
const  userRouter  = require("./src/controller/userRoutes");
const mydbConnection = require("./src/connection")
app.use(express.json())
mydbConnection()
app.use("/user",userRouter)


const PORT = 8080;;

app.listen(PORT,()=>{
    console.log("my server is ruunning on port 8080")
})