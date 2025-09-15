import React, { useRef } from "react";
import emailjs from "emailjs-com";
// Importing icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8cqgy13", // 🔹 from EmailJS dashboard
        "template_3xgpv8o", // 🔹 from EmailJS template
        form.current,
        "_5efXp0f76uVGr9d6" // 🔹 from EmailJS account
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset(); // clear form after sending
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
      <p>You can get in touch with me through my links or by sending me a message:</p>

      {/* 🔹 Contact Links with Icons */}
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

      {/* 🔹 Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" rows="3" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
