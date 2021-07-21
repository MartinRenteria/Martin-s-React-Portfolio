import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

function Contact() {
  
  return (
    <section class="contact">
            <h1 id="contact-title">Contact Me</h1>
            <div class="icon">
            <a href="mailto:renteriamp96@gmail.com"><FcGoogle /></a>
            <a href="https://github.com/MartinRenteria"><FaGithub /></a>
            <a className="Linkedin" href="https://www.linkedin.com/in/martin-renteria/"><FaLinkedin /></a>
            </div>
            <footer class="footer"><p>© Martin Renteria 2021</p></footer>
    </section>
  )
}

export default Contact;
