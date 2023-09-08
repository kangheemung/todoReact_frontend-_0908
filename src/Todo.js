import React from 'react';


const Todo = ( {todo,toggleTodo}) => {
    const handleTodoClick =()=>{
        toggleTodo(todo.id);
    };
  return <div>
            <label>
              <input type="checkbox" checked= {todo.completed} readOnly onChange={handleTodoClick}/>
            </label>
               <p>{todo.name}:name</p>
              
              
         </div>
  
};
export default Todo;