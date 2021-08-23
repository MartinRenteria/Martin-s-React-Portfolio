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
						<p className="proj-description">
							A Full-Stack MERN project (MongoDB database, Express.JS, React. JS, and Node.JS) made with
							the Google Books API that searches all books available from Google and then save them to a
							list.
						</p>
						<div className="proj-button-container">
						<button className="siteButtons">
							<a href="https://google-books-react-api.herokuapp.com/" target="_blank" rel="noreferrer">
								Link Site
							</a>
						</button>
						<button className="siteButtons">
							<a
								href="https://github.com/MartinRenteria/Google-Book-Search-With-React"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
