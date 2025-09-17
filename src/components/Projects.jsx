import React from "react";
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChatbotImg from "../assets/Chatbot.png";
import EegImg from "../assets/eeg.png";
import JobImg from "../assets/job.png";
import QuotesImg from "../assets/quotes.jpg";
import QuizImg from "../assets/quiz.png";
import WeatherImg from "../assets/weather.png";
import RecipeImg from "../assets/recipe.png";
import JewelryImg from "../assets/Jewelry.png";


const projects = [
  {
    title: "Mental-Health Chatbot",
    description: "A conversational chatbot built with Flask and JSON-based intents to provide mental health support and guidance.",
    image: ChatbotImg,
    link: "https://github.com/tushti19-gh/Mental-Health-ChatBot"
  },
  {
    title: "EEG Seizure Detection",
    description: "A deep learning project using CNN to classify EEG signals and detect epileptic seizures with high accuracy.",
    image: EegImg,
    link: "https://github.com/tushti19-gh/Epileptic-Seizure"
  },
  {
    title: "Job-Portal",
    description: "A web-based platform for job seekers and employers, featuring job postings, applications, and user authentication.",
    image: JobImg,
    link: "https://github.com/tushti19-gh/Online-Job-Portal"
  },
  {
    title: "Daily Motivation Quotes App",
    description: "A React Native mobile app that displays daily motivational quotes, supports favorites, and offers a clean UI with dark mode.",
    image: QuotesImg,
    link: "https://github.com/tushti19-gh/Daily-Motivation-App"
  },
  {
    title: "Jewelry E-commerce Website  ",
    description: "A Salesforce-based interactive e-commerce website for buying and exploring jewelry products online.",
    image:JewelryImg,
    link: "https://github.com/tushti19-gh/JewelleryStore"
  },
  {
    title: "Quiz Game",
    description: "A JavaScript-based interactive quiz game with scoring, built on a Twilight theme for a fun user experience.",
    image: QuizImg,
    link: "https://github.com/tushti19-gh/Twilight-Quiz"
  },
  {
    title: "Weather App",
    description: "A JavaScript app that fetches real-time weather data from an API and displays temperature, humidity, and conditions by city.",
    image: WeatherImg,
    link: "https://github.com/tushti19-gh/Weather-Forecast"
  },
  {
    title: "Recipe-Finder App",
    description: "A recipe search app built with JavaScript that fetches meals from an API, displaying ingredients and cooking instructions.",
    image: RecipeImg,
    link: "https://github.com/tushti19-gh/Recipe-Finder"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={100}
        slidesPerView={1}      /* show 1 project per slide by default */
        loop={true}
        breakpoints={{         /* responsive: show more on larger screens */
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
