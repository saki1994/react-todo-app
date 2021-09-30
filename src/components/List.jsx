import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const List = ({ text, onDelete, id, onCheck }) => {
  const check = () => {
    console.log("click");
  };

  // <i class="fas fa-check-circle"></i>
   
  return (
    <li> 
        <input type="checkbox"  />   
       
      <span className="todo-list">{text}</span>
      {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={() => onDelete(id)}>
        <img src="/images/icon-cross.svg" alt="delete-icon"></img> 
      </button>
    </li>
  );
};



export default List;
