const express = require("express");
const app=express();
const {databaseConnect} = require("./database/index")
require("dotenv").config()


const port=process.env.PORT 

app.listen(port,()=>{
    console.log("Server is listening on port : " + port);
})

databaseConnect();

app.get("/",(req,res)=>{
    res.send("<h1>Website Backend is working perfectly</h1>")
})