import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Tushti</h1>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>

          <li>
            <a href="#contatc">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
