import React from "react";

const Header = () => {
  const day = new Date();
  const hour = day.getHours();

  console.log(hour);
  return (
    <header className="header">
      <h1>TODO</h1>
      <img
        src={hour <= 18 ? "images/icon-sun.svg" : "images/icon-moon.svg"}
        alt={hour <= 18 ? "sun-icon" : "moon-icon"}
      />
    </header>
  );
};
export default Header;
