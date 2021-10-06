import { getByLabelText } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const List = ({ text, onDelete, id, onCheckList, listStatus }) => {
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const checkBoxStatus = (event) => {
    event.target.checked ? setIsBoxChecked(true) : setIsBoxChecked(false);
    onCheckList(id, event.target.checked);
  };

  const handleClick = () => {
    onDelete(id);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {listStatus && (
        <label className="checked-label">
          <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
          <span className="checked-span"></span>
        </label>
      )}

      {!listStatus && !isMouseOver && (
        <label className="unhovered-label">
          <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
          <span></span>
        </label>
      )}
      {!listStatus && isMouseOver && (
        <label className="hovered-label">
          <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
          <span class="hovered-span"></span>
        </label>
      )}

      <span 
        style={{ textDecoration: listStatus ? "line-through" : "none" }}
        className="todo-list"
      >
        {text}
      </span>
      {/* Event onClick calls onDelete and pass in the id */}
      <button
        style={{ visibility: isMouseOver ? "visible" : "hidden" }}
        onClick={handleClick}
      >
        <img src="/images/icon-cross.svg" alt="delete-icon"></img>
      </button>
    </li>
  );
};

export default List;
