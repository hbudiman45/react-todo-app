import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const TodoContex = createContext();

export const TodoProvider = props => {
  const [todo, setTodo] = useState([]);

  // get api
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1"
      );
      setTodo(res.data);
    };

    fetchPosts();
  }, []);
  return (
    <TodoContex.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContex.Provider>
  );
};
