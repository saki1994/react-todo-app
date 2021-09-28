import React, { useState } from "react";
import AddList from "./AddList";
import List from "./List";
import Paragraph from "./Paragraph";

const Content = () => {
  //An array of list user input
  const [todoList, setTodoList] = useState(["Cook", "Eat", "Clean"]);

  //function to add a list.
  const addTodoList = (textInput) => {
    setTodoList(prev => {
        return [...prev, textInput]
    });
  };
 
  //Function to delete a list
  const deleteList = (id) => {
     //return all list except the list with param(id)
     setTodoList(lists => {
       return lists.filter((list, index) => {
         return index !== id
       })
     })
  }
  return (
    <main>
      <AddList addTodoList={addTodoList} />
      
      <div>
      <ul>
       {/* map through array and render each to do list */}
        {todoList.map((list, index) => (
          <List key={index} id={index} text={list} onDelete={deleteList}/>
        ))}
      </ul>
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
