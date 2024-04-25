import axios from "axios";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
}

const updateTodos = async (setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  try {
    const response = await axios.get("http://localhost:3001/TODO/todos");
    setListOfTodos(response.data);
  }
  catch(error){
    console.error("Failed to update todos", error);
  }
}

export const deleteTodo = async (todo: Todo, setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  const todoID = todo.id;
  try {
    await axios.delete(`http://localhost:3001/TODO/todos/${todoID}`);
    updateTodos(setListOfTodos);
  } catch (error) {
    console.error("Failed to delete todo", error);
  }
};

export const todoComplete = async (todo: Todo, setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  console.log(`Setting todo with title ${todo.title} as completed`);
  const todoID = todo.id;
  try {
    await axios.put(`http://localhost:3001/TODO/todos/${todoID}`, {
      completed: true,
    });
    updateTodos(setListOfTodos);
  } catch (error) {
    console.error("failed to update todo to completed", error);
  }
};

export const todoUnlock = async (todo: Todo, setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  console.log(`Setting todo with title ${todo.title} as uncompleted`);
  const todoID = todo.id;
  try {
    await axios.put(`http://localhost:3001/TODO/todos/${todoID}`, {
      completed: false,
    });
    updateTodos(setListOfTodos);
  } catch (error) {
    console.error("failed to update todo to uncompleted", error);
  }
};

export const addNewTodo = async (newTitle: string, setListOfTodos: React.Dispatch<React.SetStateAction<Todo[]>>, listOfTodos: Todo[], setAddTodoError: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    const titleExists = listOfTodos.some((todo) => todo.title === newTitle);
    if (titleExists) {
      setAddTodoError("A todo with this title already exists.");
      setTimeout(() => setAddTodoError(""), 2000);
    } else {
      await axios.post("http://localhost:3001/TODO/todos", {
        title: newTitle,
      });
      updateTodos(setListOfTodos);
    }
  } catch (error) {
    console.error("Failed to add new Todo", error);
  }
};