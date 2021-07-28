import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Paper, Toolbar, Typography, AppBar, Grid } from "@material-ui/core";

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
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
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
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
