import React from 'react';


const Todo = ( {todo}) => {
  return <div>
            <label>
              <input type="checkbox" checked= {todo.completed} readOnly/>
            </label>
               <p>{todo.name}</p>
               <p>{todo.id}</p>
         </div>
  
};
export default Todo;