import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";
import Button from "./Button";
import { useLayoutEffect } from "react/cjs/react.development";

const Content = () => {
  //An array of list user input
  const [todoList, setTodoList] = useState([
    {
      text: "Complete online Javascript course",
      id: 0,
      listStatus: false,
    },
    {
      text: "Jog around the park 3x",
      id: 1,
      listStatus: false,
    },
  ]);

  const [completedList, setCompletedList] = useState([]);
  const [activeList, setActiveList] = useState([]);

  //Checks if the screen size is mobile or not.
  const [isMobileSize, setIsMobileSize] = useState(false);

  //IIFE checks the screensize
  (function getScreen() {
    window.screen.width === 370 && setIsMobileSize(true);
  })();

  // function to add a list.
  const addTodoList = (inputList) => {
    setTodoList((prev) => {
      return [...prev, inputList];
    });
  };

  //Function to delete a list
  const deleteList = (id) => {
    //return all list except the list with param(id)
    setTodoList((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  //Change status of a list to true
  const isCheckboxClick = (id, value) => {
    let elementIndex = todoList.findIndex((element) => element.id === id);
    let newArr = [...todoList];

    newArr[elementIndex] = { ...newArr[elementIndex], listStatus: value };

    setTodoList(newArr);
  };

  console.log(todoList);
  return (
    <main>
      <AddList addTodoList={addTodoList} />

      <div className="todo-box">
        <ul>
          {todoList.map((item) => (
            <List
              text={item.text}
              key={item.id}
              id={item.id}
              onDelete={deleteList}
              onCheckList={isCheckboxClick}
            />
          ))}
        </ul>
        <div className="bottom-navbar">
          <Paragraph text={todoList.length + " items left"} />

          {/* if screen size < 370 */}
          {!isMobileSize && (
            <div>
              <Button id="all" text={"All"} />
              <Button id="active" text={"Active"} />
              <Button id="completed" text={"Completed"} />
            </div>
          )}
          <Button id="clearCompleted" text={"Clear Completed"} />
        </div>
      </div>

      {/* if screen size > 370 */}
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
