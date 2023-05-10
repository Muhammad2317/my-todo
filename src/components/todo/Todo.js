import React from "react";
import "./todo.css";
// icons
import { Button, Checkbox, IconButton } from "@mui/material";

function Todo({ text, todos, setTodos, id }) {
  const iconColor = "#fff";
  const handleDelete = (id) => {
    const listItems = todos.filter((x) => x[0] !== id);
    console.log("listItems:", listItems);
    setTodos(listItems);
  };
  return (
    <div className="todo">
      <IconButton>
        <Checkbox className="checkbox" />
      </IconButton>
      <p>{text}</p>
      <Button
        className="btn__delete"
        onClick={() => {
          handleDelete(id);
          console.log(todos);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default Todo;
