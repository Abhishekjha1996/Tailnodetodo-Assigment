import React from "react";
import Style from "../style/Todoitem.module.css"
import righttick from "../icons8-right-48.png"
const TodoItem = ({ text, completed, onClick }) => {
  return (
    <div className={Style.Ctodocontainer}>
    <div
    className={Style.CItem}
      
      style={{ textDecoration: completed ? "line-through" : "none" }}>

      {text}
      
    </div>
    <img className={Style.delimg} src={righttick} alt="logo" onClick={onClick} />
    </div>
  );
};

export default TodoItem;
