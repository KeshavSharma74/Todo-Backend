// const express=require("express");
// const router=express.Router();
// const createTodo=require("../controllers/createTodo.controller.js");

// router.route("/todo").post(createTodo);

// module.exports = {router};

const express = require("express");
const router = express.Router();
const { createTodo } = require("../controllers/createTodo.controller.js");

router.route("/todo").post(createTodo);

module.exports = router;