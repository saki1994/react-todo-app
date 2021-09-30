import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const List = ({ text, onDelete, id, onCheck }) => {

  const [isBoxChecked, setIsBoxChecked] = useState(false);

  const checkBoxStatus = (event) => {
     event.target.checked ?  setIsBoxChecked(true) : setIsBoxChecked(false);
    onCheck(id);
  }; 

   
   
  return (
    <li> 
        <input type="checkbox"  onChange={checkBoxStatus} />   
       
      <span style={{ textDecoration: isBoxChecked ? 'line-through' : 'none'} } className="todo-list">{text}</span>
      {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={() => onDelete(id)}>
        <img src="/images/icon-cross.svg" alt="delete-icon"></img> 
      </button>
    </li>
  );
};



export default List;
