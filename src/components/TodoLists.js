import React, { useState, useContext } from "react";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import { TodoContex } from "./TodoContex";
import NewTodo from "./NewTodo";
import EditTodo from "./EditTodo";

const TodoLists = () => {
  const [todo, setTodo] = useContext(TodoContex);
  const [currentTodo, setCurrentTodo] = useState();
  const [editing, setEditing] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(4);

  const handleDelete = todoId => {
    setEditing(false);
    let newTodos = todo.filter(t => t.id !== todoId);
    setTodo(newTodos);
  };

  const handleTask = todoSelected => {
    setEditing(false);
    todoSelected.completed = !todoSelected.completed;
    setTodo([...todo]);
  };

  const handleEdit = todoSelected => {
    setEditing(true);
    setCurrentTodo(todoSelected);
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);
    console.log(id, updatedTodo);
    setTodo(todo.map(t => (t.id === id ? updatedTodo : t)));
  };

  // Get Current Posts
  const indexOfLastPost = currentPage * todosPerPage;
  const indexOfFirstPost = indexOfLastPost - todosPerPage;
  const currentTodos = todo.slice(indexOfFirstPost, indexOfLastPost);

  // Paginate Function
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="todo">
      {editing ? (
        <EditTodo currentTodo={currentTodo} setEditing={setEditing} />
      ) : (
        <NewTodo />
      )}
      {/* <NewTodo /> */}
      <div className="card shadow-sm bg-white rounded">
        <div className="card-body">
          <TodoItem
            todos={currentTodos}
            onDelete={handleDelete}
            handleTask={handleTask}
            handleEdit={handleEdit}
            updateTodo={updateTodo}
          />
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todo.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
