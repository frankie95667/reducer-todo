import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input";
import InputAdorment from "@material-ui/core/InputAdornment";

export default function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClear = e => {
    e.preventDefault();
    props.clearTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item"></label>
      <Input
        onChange={handleChange}
        id="item"
        name="todo"
        value={value}
        placeholder="New task name"
        endAdornment={
          <InputAdorment>
            <IconButton type="submit">
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleClear} type="button">
              <ClearAllIcon />
            </IconButton>
          </InputAdorment>
        }
      />
    </form>
  );
}
