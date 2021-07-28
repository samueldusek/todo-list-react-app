import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Paper, Toolbar, Typography, AppBar, Grid } from "@material-ui/core";

function TodoApp() {
  const initialTodos = [
    {
      id: uuidv4(),
      task: "Clean Fishtank",
      completed: false,
    },
    {
      id: uuidv4(),
      task: "Walk the dog",
      completed: true,
    },
    {
      id: uuidv4(),
      task: "Clean the kitchen",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
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
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
