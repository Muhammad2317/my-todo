import React, { useState } from "react";
import "./todoList.css";
import { Todo } from "../index";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          id={todo[0]}
          text={todo[1]}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoList;
