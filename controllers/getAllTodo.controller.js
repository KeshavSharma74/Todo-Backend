// const Todo = require("../models/todo.model.js");
const Todo = require("../models/todo.model.js");

const getAllTodo = async(req,res) =>{
    try{
        const response=await Todo.find({});
        res.status(200).json({
            status:true,
            data:response,
            message:"All Todo fetched Successfully..!!!"
        })
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            status:false,
            error:error.message,
            message:"Data Cannot be fetched..!!!"
        })
    }
}

module.exports = {getAllTodo};