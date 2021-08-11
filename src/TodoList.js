import React, { useContext } from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";
import { TodosContext } from "./context/todos.context";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo {...todo} key={todo.id} />
              {index < todos.length - 1 && <Divider key={index} />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
