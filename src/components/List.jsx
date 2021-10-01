import React, {useState} from "react"; 

const List = ({ text, onDelete, id, onCheckList }) => {

  const [isBoxChecked, setIsBoxChecked] = useState(false);

  const checkBoxStatus = (event) => {
    event.target.checked ?  setIsBoxChecked(true) : setIsBoxChecked(false);
    onCheckList(id, event.target.checked); 
  }; 

  const handleClick = () => {
    onDelete(id); 
  }
 
  return (
    <li> 
        <input type="checkbox"  onChange={checkBoxStatus} />   
       
      <span style={{ textDecoration: isBoxChecked ? 'line-through' : 'none'} } className="todo-list">{text}</span>
      {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={handleClick}>
        <img src="/images/icon-cross.svg" alt="delete-icon"></img> 
      </button>
    </li>
  );
};



export default List;
