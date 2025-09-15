import React from 'react';
import './home.css';


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

      {/* Vertical tech lines */}
      <div className="tech-lines">
        {[10, 30, 50, 70, 90].map((pos, i) => (
          <div
            key={i}
            className="tech-line"
            style={{ left: `${pos}%`, animationDuration: `${3 + i * 0.5}s` }}
          ></div>
        ))}
      </div>

      {/* Home content */}
      <div className="home-content">
        <h1 className="typing">Hi, I'm Tushti</h1>
        <p>
          I'm a passionate web developer skilled in HTML, CSS, JavaScript, and React.
          I love turning ideas into functional and visually appealing websites.
        </p>
      </div>
    </section>
  );
}
