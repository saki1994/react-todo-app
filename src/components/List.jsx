import React, { useState } from "react";

const List = ({ text, onDelete, id, onCheckList, listStatus, screenMode }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const checkBoxStatus = (event) => {
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

  const renderCheckbox = (labelStyle, spanStyle) => {
    return (
      <label className={labelStyle}>
        <input type="checkbox" id="checkbox" onChange={checkBoxStatus} />
        <span className={spanStyle}></span>
      </label>
    );
  };

  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {listStatus && renderCheckbox("checked-label", "checked-span")}
      {!listStatus && !isMouseOver && renderCheckbox("unhovered-label", "")}
      {!listStatus &&
        isMouseOver &&
        renderCheckbox(
          "hovered-label",
          screenMode === "light"
            ? "hovered-span light-span"
            : "hovered-span dark-span"
        )}

      <span className={listStatus ? "todo-list-inactive" : "todo-list-active"}>
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
