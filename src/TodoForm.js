import { TextField, Paper } from "@material-ui/core";
import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;
