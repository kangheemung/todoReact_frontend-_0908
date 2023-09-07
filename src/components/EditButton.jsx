//import {useState} from "react"
//import {Card} from"./components/Card"
const style={
    width: "100px",
    padding:"6px",
    borderRadius:"8px"
    
};
export const EditButton = props =>{
    const {isAdmin}=props;
    return (
        <button style={style} disabled={!isAdmin}>
        編集
        </button>
        );
}
