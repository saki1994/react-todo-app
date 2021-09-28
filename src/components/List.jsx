import React from "react";

const List = ({ text, onDelete, id }) => {
  return (
    <>
      <li>
        <input type="checkbox" />
        {text}
      </li>
      
      {/* Event onClick calls onDelete and pass in the id */}
      <button onClick={() => onDelete(id)} > x</button>
    </>
  );
};

export default List;
