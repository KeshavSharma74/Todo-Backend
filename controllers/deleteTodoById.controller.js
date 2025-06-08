const Todo=require("../models/todo.model.js");

const deleteTodoById = async(req,res) =>{
    try{
        const {id} = req.params;
        const response = await Todo.findByIdAndDelete(id)
        if(!response){
            res.status(404).json({
                status:false,
                message:`Data with id ${id} is not found..!!!`
            })
        }
        res.status(200).json({
            status:false,
            data:response,
            message:`Todo with id ${id} successfully deleted..!!!`
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status:false,
            error:error.message,
            message:"Todo with Id cannot be deleted..!!"
        })
    }
}

module.exports = {deleteTodoById};