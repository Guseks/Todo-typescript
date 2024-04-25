
const db = require("./database")

async function getAllTodos(){
  
  const todos = await db.getTodosFromDatabase();
  return todos;
}

async function createNew(req, res){
  const todoTitle = req.body.title;

  await db.addNewTodo(todoTitle);
  res.status(200).json({message: `New todo with title ${todoTitle} added successfully`});

}

async function updateTodo(req, res){
  const updateInfo = req.body;
  const todoID = parseInt(req.params.id);

  
  
  await db.updateTodoInDatabase(todoID, updateInfo);
  res.status(200).json({message: `todo with id ${todoID} updated`});
 
 

}

async function deleteTodoByID(req, res){
  const todoID = parseInt(req.params.id);
  await db.deleteTodoInDatabase(todoID);
  res.status(200).json({messasge: `Todo with id ${todoID} successfully deleted`});

  
}

module.exports = {getAllTodos, createNew, updateTodo, deleteTodoByID};