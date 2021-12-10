import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Header from "./Header";
import Info from './Info';

function Main() {
  return (
    <div className="main-container">
      <div className="header"><Header/></div>
    <div className="Content-Container">
        <div className="info"><Info/></div>
        <div className="aboutme"><AboutMe/> </div> 
        <div className="home"><Home/></div> 
        <div className="portfolio"><Portfolio/></div> 
        <div className="contact"><Contact/></div>
    </div>  
    </div>
  );
  
}

export default Main; 