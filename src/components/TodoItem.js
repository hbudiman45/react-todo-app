import React from "react";

const TodoItem = ({ todos, onDelete, handleTask, handleEdit }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> </th>
          <th scope="col">Todo</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 ? (
          todos.map(todo => (
            <tr key={todo.id}>
              <td>
                <button onClick={() => handleTask(todo)} className="btn btn-sm">
                  <i
                    className={
                      todo.completed ? "fa fa-check-square-o" : "fa fa-square-o"
                    }
                  />
                </button>
              </td>
              <td className={todo.completed ? "doneToDo" : ""}>{todo.title}</td>
              <td>
                <button
                  onClick={() => handleEdit(todo)}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fa fa-pencil" />
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fa fa-trash-o icon" />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Nothing Todo :)</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TodoItem;
