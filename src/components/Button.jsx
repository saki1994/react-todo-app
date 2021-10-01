import React from "react";

const Button = ({ text, handleClick, id }) => {
  
  return (
    <button className="navbar-btn" onClick={() => handleClick(id)} >
      {text}
    </button>
  );
};

export default Button;
