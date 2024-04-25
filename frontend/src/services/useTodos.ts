
import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
}

const useTodos = () => {
  const [listOfTodos, setListOfTodos] = useState<Todo[]>([]);
  
  useEffect(() => {
    //Use axios to get list of Todos from backend
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/TODO/todos");
        setListOfTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return {listOfTodos, setListOfTodos};
}

export default useTodos



