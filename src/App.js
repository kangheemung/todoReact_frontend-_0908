import {useState,useEffect,useRef} from "react";
import { Card } from './components/Card';
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
  const [todos,settodos] = useState([{id: 1,
                                 name: "Todo1", completed: false}]);
  const todoNameRef=useRef();
  
  const handleAddTodo =()=>{
    //タスクを追加
    
  };
  const onClickBuntton =() =>{
      setNum(num + 1);
    };
     useEffect(() => {
    alert();
  },[num]);
  
  //const onClickSwitch =()=> setIsAdmin(!isAdmin);
  return (
    <>
    <div>
     <TodoList todos={todos} />
     <input type="text" ref={todoNameRef} />
     <button onClick={handleAddTodo}>タスクを追加</button>
     <button>完了したタスクの削除</button>
     <div>残りタスク：０</div>
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
