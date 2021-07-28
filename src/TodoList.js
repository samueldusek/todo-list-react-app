import React from "react";
import Todo from "./Todo";
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={props.removeTodo}
              toggleTodo={props.toggleTodo}
              id={todo.id}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
