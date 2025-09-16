import React from 'react';
import './home.css';
import pfp from '../assets/intro-pic.jpg';


export default function Home() {
  return (
    <section id="home" className="home">
      {/* Matrix binary rain */}
      <div className="matrix">
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ '--i': i + 1 }}>
            {Math.random() > 0.5 ? '0' : '1'}
          </span>
        ))}
      </div>

     

      {/* Home content */}
      <div className="home-content">
        <div className="home-left">
          <img src={pfp} alt="pfp" className="profile-image" />
        </div>
        <div className="home-right">
        <h1 className="typing">Hi, I'm Tushti</h1>
        <p>
          I'm a passionate web developer skilled in HTML, CSS, JavaScript, and React.
          I love turning ideas into functional and visually appealing websites.
        </p>

        <div className="btn-group">
          <a href="/resume.pdf" download className='btn-primary'>Download Resume</a>
          <a href="#contact" className='btn-outline'>Contact Me</a>
        </div>
      </div>
      </div>
    </section>
  );
}
