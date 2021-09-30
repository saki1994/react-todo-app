import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const List = ({ text, onDelete, id }) => {
  return (
   
      <li> 
      <FontAwesomeIcon icon={ faCircle } color="white" style={{border: "1px solid grey", borderRadius: "50%"}}/>

        <span className="todo-list">{text}</span>
        {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={() => onDelete(id)} ><img src="/images/icon-cross.svg" alt="delete-icon"></img></button>
   
      </li>
      
      
  );
};

export default List;
