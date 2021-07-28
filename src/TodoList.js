import React from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {index < todos.length - 1 && <Divider key={index} />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
