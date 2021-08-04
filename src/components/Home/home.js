import React from "react";
import "./home.css"
import Typewriter from "typewriter-effect";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
    return (
    <main>
      <section className="intro">
        <Typewriter
        options={{ delay: 50 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Martin Renteria.<br/>A Full-Stack Software Enigineer<br/>based in Bellevue, WA.<br/>`)
        }}/>
            <div id="icon">
            <a href="mailto:renteriamp96@gmail.com"><FcGoogle /></a>
            <a className="Github" href="https://github.com/MartinRenteria" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="Linkedin" href="https://www.linkedin.com/in/martin-renteria/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        <a href="#project-title"><button id="portfolioButton">View Portfolio</button></a>
</section>
    </main>
    )
}

export default Home;