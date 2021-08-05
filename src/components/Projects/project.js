import React from "react";
import "./project.css";
import Google from "./images/GoogleReact.png"

function Projects() {
    return (
        <section className="projects">
        <div>
        <h1 id="project-title">Projects</h1>
        </div>
            <div className="container">
                <div className="overlay">
                    <img src={Google} class="project-images" alt="Screenshot of project - Google Books built with React framework"></img>
                    </div>
                    <div className="middle">
                    <div className="project-links">GitHub Repo</div>
                    <div className="project-links">Live Site</div>
                    </div>
            </div>
        </section>
    )
}

export default Projects;