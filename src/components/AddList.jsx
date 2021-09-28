import React, { useState } from "react";

const AddList = ({addTodoList}) => {
  const [textInput, setTextInput] = useState("");

  const handleClick = (event) => {  
     
    if (event.key === "Enter") {
      addTodoList(textInput);
      setTextInput("");
      event.preventDefault();
    }
         
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);  
  };
  
  return (
    <form action="#" onKeyPress={handleClick}>
      <input 
        onChange={handleChange}
        type="text"
        placeholder="Create a new todo"
        value={textInput}
      /> 
    </form>
  );
};

export default AddList;
