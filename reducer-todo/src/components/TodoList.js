import React from "react";
import Todo from "./Todo";
import List from '@material-ui/core/List';

export default function TodoList(props) {
  return (
    <div>
      <List dense>
        {props.todoItems.map(item => {
          return (
            <Todo
              key={item.id}
              item={item}
              toggleTodo={props.toggleTodo}
              updateTodo={props.updateTodo}
              editTodo={props.editTodo}
            />
          );
        })}
      </List>
    </div>
  );
}
