import React, { useState } from "react";

const List = ({ text, onDelete, id, onCheckList }) => {
  const [isBoxChecked, setIsBoxChecked] = useState(false);

  const checkBoxStatus = (event) => {
    event.target.checked ? setIsBoxChecked(true) : setIsBoxChecked(false);
    onCheckList(id, event.target.checked);
  };

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <li>
       <label style={{backgroundColor: isBoxChecked ? "hsl(280, 87%, 65%)" : "white"}}>
    <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
   <span></span></label> 
      <span
        style={{ textDecoration: isBoxChecked ? "line-through" : "none" }}
        className="todo-list"
      >
        {text}
      </span>
      {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={handleClick}>
        <img src="/images/icon-cross.svg" alt="delete-icon"></img>
      </button>
    </li>
  );
};

export default List;
