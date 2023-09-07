import React from 'react';
import Todo from "./Todo";


const TodoList = ({ todos }) => {
  if (!todos || !Array.isArray(todos)) {
    return null; // or return some default UI when todos is undefined or not an array
  }

  return todos.map((todo) => <Todo key={todo} todo={todo} />);
};

export default TodoList;