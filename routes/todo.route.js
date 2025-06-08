// const express=require("express");
// const router=express.Router();
// const createTodo=require("../controllers/createTodo.controller.js");

// router.route("/todo").post(createTodo);

// module.exports = {router};

const express = require("express");
const router = express.Router();
const { createTodo } = require("../controllers/createTodo.controller.js");
const { getAllTodo} = require("../controllers/getAllTodo.controller.js")
const { getTodoById } = require("../controllers/getTodoById.controller.js");
const { updateTodoById } = require("../controllers/updateTodoById.controller.js")

router.route("/todo").post(createTodo);
router.route("/getAllTodo").get(getAllTodo);
router.route("/getTodoById/:id").get(getTodoById);
router.route("/updateTodoById/:id").get(updateTodoById);

module.exports = router;