import React from "react";

const Button = ({ text, handleClick, id, screenMode }) => {
  const btnClicked = () => {
    handleClick(id);
  };

  return (
    <button
      className={
        screenMode === "light"
          ? "navbar-btn btn-light-mode"
          : "navbar-btn btn-dark-mode"
      }
      onClick={btnClicked}
    >
      {text}
    </button>
  );
};

export default Button;
