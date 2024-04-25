import React, { useState } from "react";
import "./todoForm.css";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
}

interface TodoFormProps {
  listOfTodos: Todo[];
  setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addNewTodo: (
    title: string,
    setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    listOfTodos: Todo[],
    setAddTodoError: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  setAddTodoError: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm = ({
  listOfTodos,
  setListOfTodos,
  addNewTodo,
  setAddTodoError,
}: TodoFormProps) => {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await addNewTodo(newTitle, setListOfTodos, listOfTodos, setAddTodoError);
    setNewTitle("");
  };

  return (
    <div className="todo-form">
      <h3>Add new Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle}
          placeholder="Title for new todo"
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
