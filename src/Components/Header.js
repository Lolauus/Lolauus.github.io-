import React from 'react';
import { Link } from "react-router-dom";

function Header(){

    return(     
        <div className="section--header">
            <a href="home" className="nav__item home">Viktor Persson</a>
             <div className="borderPadding1"></div>
             <div className="borderPadding2"></div>
             <div className="borderPadding3"></div>
             <div className="borderPadding4"></div>
             <p className='Header--profession'>Fullstack .NET Developer based in Gothenburg</p>
            <a href="aboutme" className="nav__item aboutme">About Me</a>
            <a href="portfolio" className="nav__item portfolio">Portfilo</a>
            <a href="contact" className="nav__item contactme">Contact me</a>
        </div>
    )
 
}
export default Header;