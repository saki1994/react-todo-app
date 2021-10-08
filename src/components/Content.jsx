import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";
import Button from "./Button";
import dataList from "./data";

const Content = ({ screenMode }) => {
  //An array of list user input
  const [todoList, setTodoList] = useState([...dataList]);
  const remainingList = todoList.filter(
    (item) => item.listStatus === false
  ).length;

  const [completedList, setCompletedList] = useState([]);
  const [activeList, setActiveList] = useState([]);

  const [completedBtnClicked, setCompletedBtnClicked] = useState(false);
  const [activeBtnClicked, setActiveBtnClicked] = useState(false);
  const [allBtnClicked, setAllBtnClicked] = useState(true);

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

  const handleClick = (id) => {
    const getAllTrue = todoList.filter((item) => {
      return item.listStatus === true;
    });

    const getAllFalse = todoList.filter((item) => {
      return item.listStatus === false;
    });

    const allItem = [...todoList];

    if (id === "completed") {
      setCompletedList(getAllTrue);
      setCompletedBtnClicked(true);
      setActiveBtnClicked(false);
      setAllBtnClicked(false);
    } else if (id === "active") {
      setActiveList(getAllFalse);
      setCompletedBtnClicked(false);
      setActiveBtnClicked(true);
      setAllBtnClicked(false);
    } else if (id === "all") {
      setAllBtnClicked(allItem);
      setCompletedBtnClicked(false);
      setActiveBtnClicked(false);
    } else if (id === "clearCompleted") {
      setTodoList((allItems) => {
        return allItems.filter((item) => {
          return item.listStatus !== true;
        });
      });
    }
  };

  const renderList = (text, id, listStatus) => {
    return (
      <List
        text={text}
        key={id}
        id={id}
        onDelete={deleteList}
        onCheckList={isCheckboxClick}
        listStatus={listStatus}
        screenMode={screenMode}
      />
    );
  };

  const renderButton = (text, id, clickEvent) => {
    return (
      <Button
        id={id}
        text={text}
        handleClick={clickEvent}
        screenMode={screenMode}
      />
    );
  };

  const renderMap = (arrayName) => {
    return arrayName.map((item) =>
      renderList(item.text, item.id, item.listStatus)
    );
  };

  const navbarClasses = `filter-tab mobile-size ${
    screenMode === "light" ? "light-navbar" : "dark-navbar"
  }`;

  return (
    <main>
      <AddList screenMode={screenMode} addTodoList={addTodoList} />

      <div
        className={
          screenMode === "light" ? "todo-box light-mode" : "todo-box dark-mode"
        }
      >
        <ul>
          {activeBtnClicked && renderMap(activeList)}
          {completedBtnClicked && renderMap(completedList)}
          {allBtnClicked && renderMap(todoList)}
        </ul>
        <div className="bottom-navbar">
          <Paragraph text={remainingList + " items left"} />

          <div className="desktop-size">
            {renderButton("All", "all", handleClick)}
            {renderButton("Active", "active", handleClick)}
            {renderButton("Completed", "completed", handleClick)}
          </div>
          {renderButton("Clear Completed", "clearCompleted", handleClick)}
        </div>
      </div>

      <div className={navbarClasses}>
        {renderButton("All", "all", handleClick)}
        {renderButton("Active", "active", handleClick)}
        {renderButton("Completed", "completed", handleClick)}
      </div>
    </main>
  );
};

export default Content;
