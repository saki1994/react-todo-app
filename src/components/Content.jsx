import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Content = () => {
  //An array of list user input
  const [todoList, setTodoList] = useState([
    "Complete online Javascript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hours",
    "Pick up groceries",
    "Complete Todo App on FrontEnd Mentor",
  ]);

  //Checks if the screen size is mobile or not.
  const [isMobileSize, setIsMobileSize] = useState(false);

  function getScreen() {
    console.log(window.screen.width, window.screen.height);
    window.screen.width === 750 && console.log("size is 750");
  }

  getScreen();

  //function to add a list.
  const addTodoList = (textInput) => {
    setTodoList((prev) => {
      return [...prev, textInput];
    });
  };

  //Function to delete a list
  const deleteList = (id) => {
    //return all list except the list with param(id)
    setTodoList((lists) => {
      return lists.filter((list, index) => {
        return index !== id;
      });
    });
  };
  return (
    <main>
      <AddList addTodoList={addTodoList} />

      <div className="todo-box">
        <ul>
          {/* map through array and render each to do list */}
          {todoList.map((list, index) => (
            <List key={index} id={index} text={list} onDelete={deleteList} />
          ))}
        </ul>
        <div className="bottom-navbar">
          <Paragraph text={"5 items left"} />
          {!isMobileSize && (
            <div>
              <Button text={"All"} />
              <Button text={"Active"} />
              <Button text={"Completed"} />
            </div>
          )}
          <Button text={"Clear Completed"} />
        </div>
      </div>
      {isMobileSize && (
          <div className="filter-tab">
            <Button text={"All"} />
            <Button text={"Active"} />
            <Button text={"Completed"} />
          </div>
        )}
    </main>
  );
};

export default Content;
