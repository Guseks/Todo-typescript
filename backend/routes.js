const express = require("express");
const router = express.Router();
const {getAllTodos, createNew, updateTodo, deleteTodoByID} = require("./manager");

router.get("/todos", async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
    
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
  
});

router.post("/todos", async (req, res) => {
  try {
    await createNew(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
});
router.put("/todos/:id", (req, res) => {
  try {
    updateTodo(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
});

router.delete("/todos/:id", (req, res) => {
  try {
    deleteTodoByID(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
})


module.exports = router;
