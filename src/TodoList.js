import React from 'react';
import Todo from "./Todo";



const TodoList = ({ todos, toggleTodo }) => {
  //if (!todos || !Array.isArray(todos)) {
  //  return null; // or return some default UI when todos is undefined or not an array
//  }

　return todos.map((todo) => <Todo todo={todo}key={todo.id} toggleTodo = {toggleTodo} />);//map関数配列で表示
};

export default TodoList;