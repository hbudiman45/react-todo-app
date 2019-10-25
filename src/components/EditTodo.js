import React, { useState, useEffect } from "react";

const EditTodo = ({ currentTodo, setEditing }) => {
  const [editTodo, setEditTodo] = useState(currentTodo);

  useEffect(() => {
    setEditTodo(currentTodo);
  }, [currentTodo]);

  const handleTodo = event => {
    setEditTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert("submit");
    // updateTodo()
  };

  return (
    <div className="card my-2 shadow-sm bg-white rounded">
      <div className="card-body">
        <form className="d-flex justify-content-around">
          <input
            type="text"
            value={currentTodo.title}
            onChange={handleTodo}
            className="form-control"
          />
          <button role="submit" className="btn btn-sm btn-primary mx-2">
            Edit
          </button>
          <button
            onClick={() => setEditing(false)}
            className="btn btn-sm btn-light"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
