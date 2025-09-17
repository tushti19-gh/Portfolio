import React, { useRef } from "react";
import emailjs from "emailjs-com";
// Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8cqgy13", // from EmailJS
        "template_3xgpv8o", // from EmailJS
        form.current,
        "_5efXp0f76uVGr9d6" // from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        You can reach me via the links below or send a message directly:
      </p>

      {/* Contact Links */}
      <ul className="contact-links">
        <li>
          <MdEmail className="contact-icon" />
          <a href="mailto:tushtidua11@gmail.com">tushtidua11@gmail.com</a>
        </li>
        <li>
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/tushtidua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tushtidua/
          </a>
        </li>
        <li>
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/tushti19-gh"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tushti19-gh
          </a>
        </li>
      </ul>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" rows="4" placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
