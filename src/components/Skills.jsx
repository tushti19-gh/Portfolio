import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React Native</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
