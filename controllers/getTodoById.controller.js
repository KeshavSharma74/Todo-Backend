    const Todo = require("../models/todo.model.js");

    const getTodoById = async(req,res) =>{
        try{
            const {id}=req.params;
            const response = await Todo.findById({
                _id:id
            })

            if(!response){
                return res.status(404).json({                
                    status:false,
                    message:`No data found with id : ${id}`
                })
            }

            res.status(200).json({
                status:true,
                data:response,
                message:`Data with id ${id} Successfully fetched..!!!`
            })
        }
        catch(error){
            res.status(500).json({
                status:false,
                error:error.message,
                message:`Data with id ${id} cannot be fetched..!! `
            })
        }
    }

    module.exports = {getTodoById}