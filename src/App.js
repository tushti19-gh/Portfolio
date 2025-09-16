import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      </main>

    </div>
  )
}

export default App
