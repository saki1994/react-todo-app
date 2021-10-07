import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./styles.scss"; 

const App = () => {
   
  const [screenMode, setScreenMode] = useState("light");

  const clickEvent = (param) => {
    if (param === "light") {
      setScreenMode("dark")
    } else {
      setScreenMode("light")
    }
  }  
  
  //sets the body background color when theme is toggled 
  const mode = screenMode === "light" ? "white" : "black";
  document.body.style.backgroundColor = mode;

  return (
    <div>
      <img
        className="background"
        src={`/images/bg-desktop-${screenMode}.jpg`} 
        alt="background-light"
      />
      <div className="container">
        <Header screenMode={screenMode} event={clickEvent}/>
        <Content screenMode={screenMode}/>
        <Footer />
      </div>
       
    </div>
  ); 
};

export default App;

