import React, {useEffect, useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./styles.scss"; 

const App = () => {
   
  const [screenMode, setScreenMode] = useState("light");
  const [screenBgSize, setScreenBgSize] = useState(""); 

  //sets the body background color when theme is toggled 
   
  const mode = screenMode === "light" ? "white" : "black"; 
  document.body.style.backgroundColor = mode;

  const clickEvent = (param) => {
    if (param === "light") {
      setScreenMode("dark")
    } else {
      setScreenMode("light")
    }
  }  
 

  useEffect(() => {
    const screen = window.screen.width;
    if (screen <= 500) {
      setScreenBgSize("mobile")
    } else {
      setScreenBgSize("desktop")
    }
  },[screenBgSize])
 

  return (
    <div>
      <img
        className="background"
        src={`/images/bg-${screenBgSize}-${screenMode}.jpg`} 
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

