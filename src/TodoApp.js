import React, { useState } from "react";
import TodoList from "./TodoList";
import { Paper, Toolbar, Typography, AppBar } from "@material-ui/core";

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Clean Fishtank",
      completed: false,
    },
    {
      id: 2,
      task: "Walk the dog",
      completed: true,
    },
    {
      id: 3,
      task: "Clean the kitchen",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <TodoList todos={todos} />
      </Paper>
    </div>
  );
}

export default TodoApp;
