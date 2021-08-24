import React from "react";
import "./project.css";
import Google from "./images/GoogleReact.png";
import Finance from "./images/Offline-finance-tracker.png";
import Weather from "./images/Weather.png";
import Workout from "./images/Workout-Tracker.png";
import Scheduler from "./images/WorkScheduler.png";
import Dance from "./images/Dance.png";

function Projects() {
	return (
		<section>
			{/*Project 1 */}

			<div>
				<h1 id="projectHeader">Projects</h1>
			</div>
			<div className="projects">
				<div className="projectContainer">
					<h2 className="project-titles">Google Books React</h2>
					<div className="containerBox">
						<img
							src={Google}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								A Full-Stack MERN project (MongoDB database, Express.JS, React. JS, and Node.JS) made
								with the Google Books API that searches all books available from Google and then save
								them to a list.
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://google-books-react-api.herokuapp.com/"
										target="_blank"
										rel="noreferrer"
									>
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

				{/*Project 2 */}

				<div className="projectContainer">
					<h2 className="project-titles">Offline FInance Tracker</h2>
					<div className="containerBox">
						<img
							src={Finance}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								A budget tracker app that allows users to track their transactions to establish a more
								organized budget with an offline functionality. Demonstrates understanding of MongoDB,
								IndexDB, manifest, and service workers for offline functionality.
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://offline-finance-tracker.herokuapp.com/"
										target="_blank"
										rel="noreferrer"
									>
										Link Site
									</a>
								</button>
								<button className="siteButtons">
									<a
										href="https://github.com/MartinRenteria/Progressive-Budget-"
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

				{/*Project 3 */}

				<div className="projectContainer">
					<h2 className="project-titles">Weather App</h2>
					<div className="containerBox">
						<img
							src={Weather}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								This application required the knowledge of requesting information from API's and saving
								information retrieved into local storage. The weather API displays weather
								information to the user based on the city they search for.
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://martinrenteria.github.io/Weather-Dashboard/"
										target="_blank"
										rel="noreferrer"
									>
										Link Site
									</a>
								</button>
								<button className="siteButtons">
									<a
										href="https://github.com/MartinRenteria/Weather-Dashboard"
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

				{/*Project 4 */}

				<div className="projectContainer">
					<h2 className="project-titles">Workout Tracker</h2>
					<div className="containerBox">
						<img
							src={Workout}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								A Workout Tracker app that allows users to track their workout progress wherever they
								are. Either in the gym, outdoors, or at home, the app assist users in maximizing their
								fitness results. This app was built using the MongoDB database with the Mongoose
								extension
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://exercise-workout-tracker.herokuapp.com/ "
										target="_blank"
										rel="noreferrer"
									>
										Link Site
									</a>
								</button>
								<button className="siteButtons">
									<a
										href="https://github.com/MartinRenteria/Workout-tracker"
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

				{/*Project 5 */}

				<div className="projectContainer">
					<h2 className="project-titles">Work Day Scheduler</h2>
					<div className="containerBox">
						<img
							src={Scheduler}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								A work-day application that required the knowledge of traversing the DOM and incorporating the use
								of local storage. Can be used for a variety of purposes to keep yourself productive!
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://martinrenteria.github.io/Work-Day-Scheduler/"
										target="_blank"
										rel="noreferrer"
									>
										Link Site
									</a>
								</button>
								<button className="siteButtons">
									<a
										href="https://github.com/MartinRenteria/Work-Day-Scheduler"
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

				{/*Project 6 */}

				<div className="projectContainer">
					<h2 className="project-titles">Dance-class Scheduler</h2>
					<div className="containerBox">
						<img
							src={Dance}
							className="project-pictures"
							alt="Screenshot of project - Google Books built with React framework"
						/>
						<div className="overlay">
							<p className="proj-description">
								A full-stack web application that uses our own server-side
								API to produce a database for different dance classes. These dance classes can be
								accessed by students or teachers, they can be searched using numerous identifiers.
								Classes and Instructors can also be added to the database.
							</p>
							<div className="proj-button-container">
								<button className="siteButtons">
									<a
										href="https://dance-class-search.herokuapp.com/login"
										target="_blank"
										rel="noreferrer"
									>
										Link Site
									</a>
								</button>
								<button className="siteButtons">
									<a
										href="https://github.com/Am-White/DanceTeacher_db"
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
			</div>
		</section>
	);
}

export default Projects;
