import React from "react";

const Button = ({ text, handleClick, id }) => {
  const btnClicked = () => {
    handleClick(id);
  };

  return (
    <button className="navbar-btn" onClick={btnClicked} >
      {text}
    </button>
  );
};

export default Button;
