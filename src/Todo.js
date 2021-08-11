import React, { useContext } from "react";
import useToggle from "./hooks/useToggle";
import { ListItem, ListItemText, Checkbox } from "@material-ui/core";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./context/todos.context";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => toggle()} aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
