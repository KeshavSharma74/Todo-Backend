const Todo=require("../models/todo.model.js");

const updateTodoById = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const response= await Todo.findByIdAndUpdate(
            id,
            {title,description},
            {
                new:true
            }
        )

    res.status(200).json({
        status:true,
        data:response,
        message:"Todo updated Successfully..!!!"
    })

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            status:false,
            error:error.message,
            message:"Internal Server Error..!!"
        })
    }
}

module.exports = {updateTodoById};
