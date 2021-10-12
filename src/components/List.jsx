/* eslint-disable default-case */
import React, { useEffect, useState } from "react";

function List({ text, onDelete, id, onCheckList, listStatus, screenMode }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [checkIcon, setCheckIcon] = useState("");
  const [addStyleClass, setAddStyleClass] = useState("");
  const darkCheckIcon = "/images/icon-check-dark.svg";
  const lightCheckIcon = "/images/icon-check-light.svg";

  function checkBoxStatus(event) {
    onCheckList(id, event.target.checked);
  }

  function handleClick() {
    onDelete(id);
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  useEffect(() => {
    //icon and classes for light mode
    if (screenMode === "light") {
      setCheckIcon(lightCheckIcon);

      //Add class depends on input status - light mode
      switch (true) {
        case listStatus:
          setAddStyleClass("label-checked");
          break;
        case !isMouseOver:
          setAddStyleClass("label-not-hovered");
          break;
        case isMouseOver && !listStatus:
          setAddStyleClass("label-hovered");
          break;
      } //end of switch statement
    } //end of "if" for light mode


    //icon and classes for dark mode
    else if (screenMode === "dark") {
      //apply dark check when input is false
      !listStatus
        ? setCheckIcon(darkCheckIcon)
        : setCheckIcon(lightCheckIcon);

      //Add class depends on input status - dark mode
      switch (true) {
        case listStatus:
          setAddStyleClass("label-checked-dark");
          break;
        case !isMouseOver:
          setAddStyleClass("label-not-hovered-dark");
          break;
        case isMouseOver && !listStatus:
          setAddStyleClass("label-hovered-dark");
          break;
      } //end of switch statement
    } //end of "else if" for dark mode
  }, [checkIcon, screenMode, listStatus, isMouseOver]);

  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <label className={addStyleClass}>
        <img src={checkIcon} alt="check-icon"></img>
        <input
          type="checkbox"
          onChange={checkBoxStatus}
        ></input>
      </label>

      <span
        className={listStatus ? "todo todo-list-inactive" : "todo todo-list-active"}
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
}

export default List;
