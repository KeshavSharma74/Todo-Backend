const express = require("express");
const app=express();
const {databaseConnect} = require("./database/index.js");
require("dotenv").config();
app.use(express.json());

const port=process.env.PORT;

app.listen(port,()=>{
    console.log("Server is listening on port : " + port);
})

// const todoRoutes=require("./routes/todo.route.js");
// const todoRoutes = require("./routes/todo.route.js");'

const todoRoutes = require("./routes/todo.route.js");
app.use("/api/v1", todoRoutes);

databaseConnect();

app.get("/",(req,res)=>{
    res.send("<h1>Website Backend is working perfectly</h1>")
})