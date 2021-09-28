import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";

const Content = () => {
  const [todoList, setsTodoList] = useState([]);

  const addTodoList = (textInput) => {
    setsTodoList(prev => {
        return [...prev, textInput]
    });
  };
  return (
    <main>
      <AddList addTodoList={addTodoList} />
      <ul>
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
