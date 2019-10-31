import React, { useState, useEffect } from "react";

const EditTodo = ({ currentTodo, setEditing, updateTodo }) => {
  const [editTodo, setEditTodo] = useState(currentTodo);

  useEffect(() => {
    setEditTodo(currentTodo);
  }, [currentTodo]);

  const handleTodo = event => {
    setEditTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateTodo(editTodo.id, editTodo);
  };

  return (
    <div className="card my-2 shadow-sm bg-white rounded">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="d-flex justify-content-around">
          <input
            type="text"
            value={editTodo.title}
            name="title"
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
