import React from "react";
import ProfilePic from "../assets/profilePic.png";

function Header() {
  return (
    <header>
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
