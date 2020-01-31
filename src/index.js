import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TodoLists from "./components/TodoLists";
import { TodoProvider } from "./components/TodoContex";
function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className="App-header">
          <h1>React ToDo App</h1>
          <TodoLists />
          <br />
          {/* <p className="footer">
            REST API from: jsonplaceholder.typecode.com/todos
          </p> */}
        </div>
      </div>
    </TodoProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
