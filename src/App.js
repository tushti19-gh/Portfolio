import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      </main>

    </div>
  )
}

export default App
