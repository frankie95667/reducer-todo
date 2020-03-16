import React, { useReducer, useEffect } from "react";
import { useTodoReducer } from "./reducer/reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [
    state,
    addTodo,
    toggleTodo,
    clearTodos,
    updateTodo,
    editTodo
  ] = useTodoReducer([]);

  useEffect(() => {
    setTimeout(() => {
      addTodo("New Todo Item");
    }, 5000);
  }, []);

  return (
    <div className="App">
      <TodoList
        todoItems={state}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        updateTodo={updateTodo}
      />
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
    </div>
  );
}

export default App;
