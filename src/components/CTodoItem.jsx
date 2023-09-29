import React from "react";
import Style from "../style/Todoitem.module.css";
import dletelogo from "../icons8-delete-100.png";

const CTodoItem = ({ text, completed, onClick }) => {
  return (
    <div className={Style.Ctodocontainer}>
      <div
        className={Style.CItem}
        style={{
          textDecoration: completed ? "line-through" : "none",
          textDecorationColor: "red",
        }}>
        {text}
      </div>

      <img
        className={Style.delimg}
        src={dletelogo}
        alt="logo"
        onClick={onClick}
      />
    </div>
  );
};

export default CTodoItem;
