import React from "react";
import "./project.css";
import Google from "./images/GoogleReact.png"

function Projects() {
    return (
        <main>
        <div>
        <h1 className="Project-title">Projects</h1>
        </div>
                    <img src={Google} class="project-images" alt="Screenshot of project"></img>
                </main>
    )
}

export default Projects;