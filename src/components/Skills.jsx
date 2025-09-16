import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaCode, FaJava
} from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';


function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card"><FaHtml5 className="skill-icon html" /><p>HTML</p></div>
        <div className="skill-card"><FaCss3Alt className="skill-icon css" /><p>CSS</p></div>
        <div className="skill-card"><FaJs className="skill-icon js" /><p>JavaScript</p></div>
        <div className="skill-card"><FaReact className="skill-icon react" /><p>React</p></div>
        <div className="skill-card"><FaReact className="skill-icon react" /><p>React Native</p></div>
        <div className="skill-card"><FaPython className="skill-icon python" /><p>Python</p></div>
        <div className="skill-card"><FaJava className="skill-icon java" /><p>Java</p></div>
        <div className="skill-card"><SiFlask className="skill-icon flask" /><p>Flask</p></div>
        <div className="skill-card"><FaDatabase className="skill-icon sql" /><p>SQL</p></div>
        <div className="skill-card"><FaCode className="skill-icon apex" /><p>Apex</p></div>
        <div className="skill-card"><FaCode className="skill-icon dsa" /><p>DSA</p></div>
        <div className="skill-card"><FaCode className="skill-icon oops" /><p>OOPs</p></div>
        <div className="skill-card"><FaCode className="skill-icon salesforce" /><p>Salesforce (Basics)</p></div>
      </div>
    </section>
  );
}

export default Skills;
