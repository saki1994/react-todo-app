import React, { useState } from "react";

const List = ({ text, onDelete, id, onCheckList }) => {
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const checkBoxStatus = (event) => {
    event.target.checked ? setIsBoxChecked(true) : setIsBoxChecked(false);
    onCheckList(id, event.target.checked);
  };

  const handleClick = () => {
    onDelete(id);
    console.log("x")
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <label className={isMouseOver || isBoxChecked ? "hovered-label" : "unhovered-label"}>
        <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
        <span></span>
      </label>
      <span
        style={{ textDecoration: isBoxChecked ? "line-through" : "none" }}
        className="todo-list"
      >
        {text}
      </span>
      {/* Event onClick calls onDelete and pass in the id */} 
        <button style={{visibility: isMouseOver ? "visible" : "hidden"}}onClick={handleClick}>
          <img src="/images/icon-cross.svg" alt="delete-icon"></img>
        </button> 
    </li>
  );
};

export default List;
