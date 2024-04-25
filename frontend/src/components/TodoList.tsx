import React, { useRef } from "react";
import "./todoList.css";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => void;
  todoComplete: (
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => void;
  todoUnlock: (
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => void;
}

const TodoList = ({
  todos,
  setTodos,
  deleteTodo,
  todoComplete,
  todoUnlock,
}: TodoListProps) => {
  const todoRefs = useRef<HTMLLIElement[]>([]);

  const handleComplete = (todo: Todo) => {
    todoComplete(todo, setTodos);
  };

  const handleUnlock = (todo: Todo) => {
    todoUnlock(todo, setTodos);
  };
  const handleDelete = (todo: Todo) => {
    deleteTodo(todo, setTodos);
  };

  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      {todos.length !== 0 ? (
        <ul>
          {todos.map((todo: Todo, index: number) => (
            <li
              className={todo.completed ? "complete" : ""}
              ref={(element) =>
                (todoRefs.current[index] = element as HTMLLIElement)
              }
              key={todo.title}
            >
              {todo.title}
              <div className="buttons">
                <button onClick={() => handleComplete(todo)}>Done</button>
                <button onClick={() => handleUnlock(todo)}>Unlock</button>
                <button onClick={() => handleDelete(todo)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos yet!</p>
      )}
    </div>
  );
};

export default TodoList;
