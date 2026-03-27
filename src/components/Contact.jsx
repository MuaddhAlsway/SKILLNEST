import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Send us a message!</p>
      </div>

      <div className="contactContainer">
        
        {/* LEFT SIDE */}
        <div className="contactInfo">
          <h2>Get in Touch</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +966 500 000 000</p>
          <p>Location: Jeddah, Saudi Arabia</p>
        </div>

        {/* RIGHT SIDE */}
        <form className="contactForm">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;