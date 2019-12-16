import React, { useState, useContext, useEffect } from "react";
import { TodoContex } from "./TodoContex";
import axios from "axios";

const NewTodo = () => {
  const [addTodo, setAddTodo] = useState([]);
  const [todo, setTodo] = useContext(TodoContex);

  const handleTodo = event => {
    setAddTodo(event.target.value);
  };

  const submitTodo = event => {
    let num = Math.floor(Math.random() * 100 + 1);
    event.preventDefault();
    setTodo(prevTodo => [
      { id: num, title: addTodo, completed: false },
      ...prevTodo
    ]);
    setAddTodo("");
  };

  return (
    <div className="card my-2 shadow-sm bg-white rounded">
      <div className="card-body">
        <form onSubmit={submitTodo} className="d-flex justify-content-around">
          <input
            type="text"
            value={addTodo}
            onChange={handleTodo}
            className="form-control"
            placeholder="What are you going to do?"
          />
          <button className="btn btn-sm btn-primary mx-2">Add</button>
        </form>
      </div>
    </div>
  );
};

export default NewTodo;
