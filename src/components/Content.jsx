import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";

const Content = () => {
  //An array of list user input
  const [todoList, setsTodoList] = useState([]);

  //function to add all to do in todoList variable.
  const addTodoList = (textInput) => {
    setsTodoList(prev => {
        return [...prev, textInput]
    });
  };
  return (
    <main>
      <AddList addTodoList={addTodoList} />
      <ul>
       {/* map through array and render each to do list */}
        {todoList.map((list, index) => (
          <List key={index} id={index} text={list} />
        ))}
      </ul>
      <div>
        <Paragraph text={"5 items left"} />
        <Paragraph text={"All"} />
        <Paragraph text={"Active"} />
        <Paragraph text={"Complete"} />
        <Paragraph text={"Clear Completed"} />
      </div>
    </main>
  );
};

export default Content;
