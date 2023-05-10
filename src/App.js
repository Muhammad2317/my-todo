import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components";
import { Button } from "@mui/material";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const handleClick = () => {
    setTodos([...todos, [id, currentTask]]);
    setId(id + 1);
    console.log([...todos]);
  };
  return (
    <div className="App">
      <div className="addTodo">
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => {
            setCurrentTask(e.target.value);
            console.log(currentTask);
          }}
        />
        <Button className="btn__add" onClick={handleClick}>
          Add
        </Button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
