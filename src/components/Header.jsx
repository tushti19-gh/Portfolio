import React from "react";
import ProfilePic from "../assets/profilePic.png";
//import  { useState, useEffect } from "react";

function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //       console.log(window.scrollY); 
  //     if (window.scrollY > 10) { // adjust threshold
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
 <header className="header">

      <nav className="navbar">
        <div className="logo-container">
          <img src={ProfilePic} alt="Tushti" className="profile-pic" />
          <h1 className="logo">Tushti</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About/Resume</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
