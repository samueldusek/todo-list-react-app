import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";
import { TodosContext } from "./context/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
