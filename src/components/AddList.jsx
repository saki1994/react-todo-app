import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const AddList = ({ addTodoList, screenMode }) => {
  //variable to save user inputs
  const [textInput, setTextInput] = useState({
    text: "",
    id: 6,
    listStatus: false,
  });

  //event for form keypress
  const handleClick = (event) => {
    // gets call only if enter key is pressed
    if (event.key === "Enter") {
      addTodoList(textInput);
      setTextInput((previous) => {
        return {
          ...previous,
          text: "",
          id: textInput.id + 1,
          listStatus: false,
        };
      });
      //prevent website from refreshing
      event.preventDefault();
    }
  };

  //Event for input changes (on time)
  const handleChange = (event) => {
    //save input value to textInput variable.
    let val = event.target.value;

    setTextInput((previous) => {
      return {
        ...previous,
        text: val,
      };
    });
  };

  return (
    <form
      className={screenMode === "light" ? "form-light" : "form-dark"}
      action="#"
      onKeyPress={handleClick}
    >
      <FontAwesomeIcon
        className="header-icon"
        icon={faCircle}
        color={screenMode === "light" ? "white" : "hsl(237, 14%, 26%)"} 
      />

      <input
        className="add-task"
        onChange={handleChange}
        type="text"
        placeholder="Create a new todo"
        value={textInput.text}
      />
    </form>
  );
};

export default AddList;
