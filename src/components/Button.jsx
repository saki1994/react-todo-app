import React from "react";

const Button = ({ text, handleClick, id, btnStatus }) => { 

  const btnClicked = () => {
    handleClick(id); 
  };
  return (
    <button
      className="navbar-btn" 
      style={{color: btnStatus ? "hsl(220, 98%, 61%)" : "hsl(236, 9%, 61%)"}}
      onClick={btnClicked}
    >
      {text}
    </button>
  );
};

export default Button;


// style={{ color: !isBtnClicked ? "hsl(236, 9%, 61%)" : "hsl(220, 98%, 61%)" }}