import React from 'react';
import classes from "./CssModules.module.scss";
 export const CssModules =()=>{
    return (
    <div className ={classes.container}>
        <p className ={classes.title}> CSS Moudulesです。</p>
        <button className ={classes.button}>ボタン</button>
    </div>
    );
  };
export default CssModules;