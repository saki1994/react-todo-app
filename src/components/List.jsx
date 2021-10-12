import React, { useEffect, useState } from "react";

const List = ({ text, onDelete, id, onCheckList, listStatus, screenMode }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [checkIcon, setCheckIcon] = useState("");
  const [addStyleClass, setAddStyleClass] = useState("");

  const checkBoxStatus = (event) => {
    onCheckList(id, event.target.checked);
    console.log("click");
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
  // "/images/icon-check-dark.svg"

  useEffect(() => {
    //for light mode
    if (screenMode === "light") {
      setCheckIcon("/images/icon-check-light.svg");

      //Add class depends on input status - light mode
      if (listStatus) {
        setAddStyleClass("label-checked");
      } else if (!isMouseOver) {
        setAddStyleClass("label-not-hovered");
      } else if (isMouseOver && !listStatus) {
        setAddStyleClass("label-hovered");
      }
    } //end of "if" for light mode

    //for dark mode
    else if (screenMode === "dark") {
      //apply dark check when input is false
      if (!listStatus) {
        setCheckIcon("/images/icon-check-dark.svg");
      }
      //apply white check when input is true
      else {
        setCheckIcon("/images/icon-check-light.svg");
      }

      //Add class depends on input status - dark mode
      if (listStatus) {
        setAddStyleClass("label-checked-dark");
      } else if (!isMouseOver) {
        setAddStyleClass("label-not-hovered-dark");
      } else if (isMouseOver && !listStatus) {
        setAddStyleClass("label-hovered-dark");
      }
    } //end of "else if" for dark mode
  }, [checkIcon, screenMode, listStatus, isMouseOver]);

  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <label className={addStyleClass}>
        <img src={checkIcon} alt="check-icon"></img>
        <input
          style={{ position: "absolute", visibility: "hidden" }}
          type="checkbox"
          onChange={checkBoxStatus}
        ></input>
      </label>

      <span
        className={
          listStatus ? "todo todo-list-inactive" : "todo todo-list-active"
        }
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
