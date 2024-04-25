import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodos from "./services/useTodos";
import {
  addNewTodo,
  deleteTodo,
  todoComplete,
  todoUnlock,
} from "./services/apiOperations";

function App() {
  const { listOfTodos, setListOfTodos } = useTodos();
  const [addTodoError, setAddTodoError] = useState("");

  return (
    <div className="app">
      {addTodoError && <span className="addTodoError">{addTodoError}</span>}
      <h2 id="app-headline">My Todo App</h2>
      <TodoForm
        setListOfTodos={setListOfTodos}
        addNewTodo={addNewTodo}
        listOfTodos={listOfTodos}
        setAddTodoError={setAddTodoError}
      />
      <TodoList
        todos={listOfTodos}
        setTodos={setListOfTodos}
        deleteTodo={deleteTodo}
        todoComplete={todoComplete}
        todoUnlock={todoUnlock}
      />
    </div>
  );
}

export default App;
