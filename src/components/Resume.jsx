import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <iframe
      src = "/Resume.pdf"
      width="100%"
      height="600px"
      style={{border: 'none'}}
      title="Resume"
      ></iframe>

      <a href="/Resume.pdf" download className="btn">
      Download Resume
      </a>
      </section>
  )
}

export default Resume
