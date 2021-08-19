import React from "react";
import "./project.css";
import Google from "./images/GoogleReact.png";

function Projects() {
	return (
		<section className="projects">
			<div>
				<h1 id="project-title">Projects</h1>
			</div>
			<div className="projectContainer">
				<div className="containerBox">
					<img
						src={Google}
						className="project-pictures"
						alt="Screenshot of project - Google Books built with React framework"
					/>
				<div className="overlay">
						<a href="https://google-books-react-api.herokuapp.com/" target="_blank" rel="noreferrer">
							<button className="siteButtons">Live Site</button>
						</a>
						<a
							href="https://github.com/MartinRenteria/Google-Book-Search-With-React"
							target="_blank"
							rel="noreferrer"
						>
							<button className="siteButtons">GitHub</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
