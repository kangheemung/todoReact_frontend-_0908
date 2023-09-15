import {useState,useEffect,useRef} from "react";
import { Card } from './components/Card';
import { v4 as uuidv4 } from 'uuid';
import {Child1} from'./components/Child1';
import {Child4} from'./components/Child4';

//import { Routes, Route, Link } from 'react-router-dom';

//import AddTodo from "./AddTodo";
import TodoList from './TodoList';
//import EditTodo from './EditTodo';
import CssModules from './components/CssModules';
import './App.css';


export const App = () => {
  //const [users,setUsers] = useState<User[]>([]);
  //useEffect(()=>{
    //axios.get<User[]>("http//example.com/users").then((res)=>{
      //setUsers(res.data);
  //  })
  //},[]);
  //};
  console.log("レンダリング")
  const[isAdmin,setIsAdmin] = useState(false);
  const [num,setNum] = useState(0);
  const [todos,setTodos] = useState([]);
  const todoNameRef = useRef();//文字列情報習得
  
  const handleAddTodo = () => {
    //タスクを追加
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
    });
      todoNameRef.current.value = null;
   };
   const toggleTodo = (id) =>{
     const newTodos =[...todos];
     const todo = newTodos.find((todo) => todo.id === id);
     todo.completed =!todo.completed;
     setTodos(newTodos);
   };
   
  const onClickBuntton =() =>{
      setNum(num + 1);
    };
     useEffect(() => {
    alert();
  },[num]);
  const handleClear =() =>{
    const newTodos =todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  
  //const onClickSwitch =()=> setIsAdmin(!isAdmin);
  return (
    <>
    <div class= "body">
    <p>今日やることリスト</p>
     <input class="name_box" type="text" ref={todoNameRef} /> 　
      <p>
       <button class="button" onClick={handleAddTodo}>タスクを追加</button>
       <button class="button" onClick ={handleClear}>完了したタスクの削除</button>
   　　 </p>
     <TodoList todos={todos} toggleTodo = {toggleTodo}/>
     <Child1 />
     <Child4 />
     <div>残りタスク：{todos.filter((todo)=> !todo.completed).length}</div>
      {isAdmin ? <span>管理者です。</span>:<span>管理者以外です。</span>}
      <button onClick={onClickBuntton}>切り替え</button>
      <Card isAdmin ={isAdmin} />
      <CssModules/>
      <p>{num}</p>
    </div>
    </>
  );
}

export default App;
