// src/components/Projects.jsx
import React from "react";
import './Projects.css'; // separate CSS for styling

const projects = [
  {
    title: "Weather Forecast App",
    description: "A simple app to get weather updates using API.",
    image: "/assets/weather.png",
    link: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Quiz Game",
    description: "A fun JavaScript quiz game with scoring.",
    image: "/assets/quiz.png",
    link: "https://github.com/yourusername/quiz-game"
  },
  // add more projects here
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
