const Todo = require("../models/todo.model.js");

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(200).json({
            success: true,
            data: response,
            message: "Todo created successfully..!!!"
        });
    } catch (error) {
        console.log("Could not create todo: " + error);
        res.status(500).json({
            success: false,
            message: "Todo cannot be created..!!!"
        });
    }
};

module.exports = { createTodo };
