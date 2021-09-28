import React from "react";

const List = ({ text }) => {
  return (
    <>
      <li>
        <input type="checkbox" />
        {text}
      </li>
      <button>x</button>
    </>
  );
};

export default List;
