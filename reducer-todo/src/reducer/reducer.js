import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case "EDIT_TODO":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case "TOGGLE_TODO":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    case "CLEAR_TODOS":
      return state.filter(item => !item.completed);
    default:
      return state;
  }
};

export const useTodoReducer = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todo => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        item: todo,
        completed: false,
        id: Date.now(),
        editing: false
      }
    });
  };

  const toggleTodo = todo => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo
    });
  };

  const updateTodo = todo => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        ...todo,
        editing: false
      }
    });
  };

  const editTodo = todo => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        ...todo,
        editing: true
      }
    });
  };

  const clearTodos = () => {
    dispatch({
      type: "CLEAR_TODOS"
    });
  };

  return [state, addTodo, toggleTodo, clearTodos, updateTodo, editTodo];
};
