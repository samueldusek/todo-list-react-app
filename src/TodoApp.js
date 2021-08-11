import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Paper, Toolbar, Typography, AppBar, Grid } from "@material-ui/core";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Call mum", completed: false }];

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
        <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
