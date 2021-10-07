import React from "react";

const Header = ({event, screenMode}) => {
  const day = new Date();
  const hour = day.getHours();

  const clickEvent = () => {
    event(screenMode);
  }
  
  return (
    <header className="header">
      <h1>TODO</h1>
      <img  onClick={clickEvent}
        src={hour <= 18 ? "images/icon-sun.svg" : "images/icon-moon.svg"}
        alt={hour <= 18 ? "sun-icon" : "moon-icon"}
      />
    </header>
  );
};
export default Header;
