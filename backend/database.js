const mysql = require('mysql2');


const dbConnection = createDBConnection();

async function getTodosFromDatabase() {
  try {
    const getQuery = 'SELECT * FROM my_todos';
    const data = await dbConnection.promise().query(getQuery);
    const todosArray = data[0];

    return todosArray;
  }
  catch (error) {
    console.error('Error when retrieving data from database: ', error);
  }
}

async function updateTodoInDatabase(todoID, updateInfo) {
  try {
    let updateQuery = 'UPDATE my_todos SET';
    const params = [];

    if(updateInfo.hasOwnProperty("title")){
      updateQuery += " title = ?,";
      params.push(updateInfo.title);
    }
    if(updateInfo.hasOwnProperty("completed")){
      updateQuery += " completed = ?,";
      params.push(updateInfo.completed);
    }

    updateQuery = updateQuery.slice(0, -1);

    updateQuery += ' WHERE id = ?';
    params.push(todoID);

    await dbConnection.promise().query(updateQuery, params);
    console.log(`todo with id ${todoID} updated`);
  }
  catch (error){
    console.error(`Error updating todo with ID ${todoID}:`, error);
    throw error;
  }
  
}

async function addNewTodo(todoTitle) {
  try {
    const insertQuery = 'INSERT INTO my_todos (title, completed) VALUES (?, ?)';
    const params = [todoTitle, false];
    await dbConnection.promise().query(insertQuery, params);

    console.log(`New todo with title ${todoTitle} added successfully`);
    
  }
  catch (error) {
    console.error('Error adding new todo:', error);
    throw error;
  }
}

async function deleteTodoInDatabase(todoID) {
  try {
    const deleteQuery = `DELETE FROM my_todos WHERE id = ?`
    const params = [todoID];

    await dbConnection.promise().query(deleteQuery, params);
  }
  catch (error){
    console.error('Errir when deleting todo', error);
    throw error;
  }
}

function createDBConnection(){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bankekind930602',
    database: 'todos'
  })
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
    console.log('Connected to the database');
  });
  
  

  return connection;

}


module.exports = {getTodosFromDatabase, updateTodoInDatabase, addNewTodo, deleteTodoInDatabase};