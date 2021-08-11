import { TextField, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";

import { TodosContext } from "./context/todos.context";

function TodoForm() {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
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
