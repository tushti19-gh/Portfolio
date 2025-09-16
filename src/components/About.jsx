import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>Who am I & What I Do?</h2>
      <p>
        Hi, I'm <strong>Tushti Dua</strong>, a B.Tech graduate in Computer
        Science from UIET, Kurukshetra University (Batch of 2025). I am
        passionate about programming and have hands-on experience with{" "}
        <strong>C++, Python, and Java</strong>. I have worked with web
        technologies like <strong>HTML, CSS, JavaScript, and React</strong>, as
        well as mobile app development using <strong>React Native</strong>, and
        I am currently exploring <strong>Salesforce</strong>. I enjoy solving
        challenging problems and continuously learning new technologies to grow
        as a developer.
      </p>
      <p>
        During my academic journey, I gained practical exposure through an{" "}
        <strong>AIML internship at NIT Kurukshetra</strong>. I am now seeking
        opportunities to kickstart my career in IT, contribute to innovative
        projects, and make an impact through my skills and creativity.
      </p>
      <p>
        Beyond coding, I love exploring tech trends, working on mini projects,
        reading books, and reflecting on self-improvement.
      </p>
      <section id="resume" className="resume-section">
        <a href="/Resume.pdf"  className="btn">
          View Resume
        </a>
      </section>
    </section>
  );
}

export default About;
