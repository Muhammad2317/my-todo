import React from "react";
import "./addTodo.css";
import { Button } from "@mui/material";

function AddTodo() {
  return (
    <div className="addTodo">
      <input type="text" placeholder="Add Task" />
      <Button className="btn__add">Add</Button>
    </div>
  );
}

export default AddTodo;
