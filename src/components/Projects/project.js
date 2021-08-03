import React from "react";
import "./project.css";
import Google from "./images/GoogleReact.png"

function Projects() {
    return (
        <section className="projects">
        <div>
        <h1 id="Project-title">Projects</h1>
        </div>
                    <img src={Google} class="project-images" alt="Screenshot of project"></img>
        </section>
    )
}

export default Projects;