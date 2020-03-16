import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditIcon from "@material-ui/icons/Edit";
import IconButtom from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import PublishIcon from "@material-ui/icons/Publish";

export default function Todo(props) {
  const [inputText, setInputText] = useState(props.item.item);
  const editClick = (e, item) => {
    e.preventDefault();
    props.editTodo(item);
  };

  const updateTodo = (e, item) => {
    e.preventDefault();
    const newItem = {
      ...item,
      item: inputText
    };
    props.updateTodo(newItem);
  };

  const handleChange = e => {
    setInputText(e.target.value);
  };

  return (
    <>
      {props.item.editing ? (
        <ListItem>
          <TextField name="todo" onChange={handleChange} value={inputText} />
          <ListItemSecondaryAction>
            <IconButtom onClick={e => updateTodo(e, props.item)}>
              <PublishIcon />
            </IconButtom>
          </ListItemSecondaryAction>
        </ListItem>
      ) : (
        <>
          <ListItem
            button
            onClick={(e) => props.toggleTodo(props.item)}
            selected={props.item.completed}
            className={props.item.completed ? "completed" : ""}
          >
            <ListItemText primary={props.item.item} />
            <ListItemSecondaryAction>
              <IconButtom onClick={e => editClick(e, props.item)}>
                <EditIcon />
              </IconButtom>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      )}
    </>
  );
}
