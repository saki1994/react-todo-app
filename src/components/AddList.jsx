import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const AddList = ({ addTodoList }) => {
  //variable to save user inputs
  const [textInput, setTextInput] = useState("");

  //event for form keypress
  const handleClick = (event) => {
    // gets call only if enter key is pressed
    if (event.key === "Enter") {
      //pass the user input to the parent component 'Content'
      addTodoList(textInput);
      //set the input to empty
      setTextInput("");

      //prevent website from refreshing
      event.preventDefault();
    }
  };

  //Event for input changes (on time)
  const handleChange = (event) => {
    //save input value to textInput variable.
    setTextInput(event.target.value);
  };

  return (
    <form action="#" onKeyPress={handleClick}>
      <FontAwesomeIcon icon={faCircle} color="white" style={{border: "1px solid grey", borderRadius: "50%"}}/>

      <input
        className="add-task"
        onChange={handleChange}
        type="text"
        placeholder="Create a new todo"
        value={textInput}
      />
    </form>
  );
};

export default AddList;
