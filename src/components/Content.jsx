/* eslint-disable default-case */
import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";
import Button from "./Button";
import dataList from "./data";

const Content = ({ screenMode }) => {
  //An array of list user input
  const [todoList, setTodoList] = useState([...dataList]);
  const [completedList, setCompletedList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [completedBtnClicked, setCompletedBtnClicked] = useState(false);
  const [activeBtnClicked, setActiveBtnClicked] = useState(false);
  const [allBtnClicked, setAllBtnClicked] = useState(true);
  const remainingList = todoList.filter(
    (item) => item.listStatus === false
  ).length;

  // function to add a list.
  function addTodoList(inputList) {
    setTodoList((prev) => {
      return [...prev, inputList];
    });
  }

  //Function to delete a list
  function deleteList(id) {
    //return all list except the list with param(id)
    setTodoList((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  //Change status of a list to true
  function isCheckboxClick(id, value) {
    //find index of the current id
    let elementIndex = todoList.findIndex((element) => element.id === id);
    //copy all todolist item inside var newArr
    let newArr = [...todoList];
    newArr[elementIndex] = { ...newArr[elementIndex], listStatus: value };
    setTodoList(newArr);
  }

  function handleClick(id) {
    //const for all list which are done
    const getAllTrue = todoList.filter((item) => {
      return item.listStatus === true;
    });

    //const for all list which are not done
    const getAllFalse = todoList.filter((item) => {
      return item.listStatus === false;
    });

    //const for all list done and not done
    const allItem = [...todoList];

    //Avoid repeating this inside switch statement
    function setCondition(completed, active, all) {
      setCompletedBtnClicked(completed);
      setActiveBtnClicked(active);
      setAllBtnClicked(all);
    }

    switch (id) {
      case "completed":
        setCompletedList(getAllTrue);
        setCondition(true, false, false);
        break;
      case "active":
        setActiveList(getAllFalse);
        setCondition(false, true, false);
        break;
      case "all":
        setAllBtnClicked(allItem);
        setCondition(false, false, true);
        break;
      case "clearCompleted":
        setTodoList((allItems) => {
          return allItems.filter((item) => {
            return item.listStatus !== true;
          });
        });
        break;
    }
  }

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

  //set up class for mobile size and condition if light or dark mode
  const navbarClasses = `filter-tab mobile-size ${
    screenMode === "light" ? "light-navbar" : "dark-navbar"
  }`;

  return (
    <main>
      {/* Adding a new to do list */}
      <AddList screenMode={screenMode} addTodoList={addTodoList} />

      <div
        className={
          screenMode === "light" ? "todo-box light-mode" : "todo-box dark-mode"
        }
      >
        <ul>
          {/* render page if All, Active or Completed btn is clicked*/}
          {activeBtnClicked && renderMap(activeList)}
          {completedBtnClicked && renderMap(completedList)}
          {allBtnClicked && renderMap(todoList)}
        </ul>
        <div className="bottom-navbar">
          <Paragraph text={remainingList + " items left"} />

          {/* This div renders only on desktop size*/}
          <div className="desktop-size">
            {renderButton("All", "all", handleClick)}
            {renderButton("Active", "active", handleClick)}
            {renderButton("Completed", "completed", handleClick)}
          </div>
          {renderButton("Clear Completed", "clearCompleted", handleClick)}
        </div>
      </div>

      {/* This div renders only on mobile size*/}
      <div className={navbarClasses}>
        {renderButton("All", "all", handleClick)}
        {renderButton("Active", "active", handleClick)}
        {renderButton("Completed", "completed", handleClick)}
      </div>
    </main>
  );
};

export default Content;
