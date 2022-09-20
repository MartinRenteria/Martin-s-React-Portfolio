import React from "react";
import "./skills.css";

function Skills() {
	return (
		<section className="skillsSection">
			<h1 id="skills" className="skills-title">Skills and Expertises</h1>
			<div className="cards">
				<div class="flip-card">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<p className="card-title">Front-end Techonolgies</p>
						</div>
						<div class="flip-card-back">
							<div className="tools">
								<ul className="card-title-back">
									<li>
										HTML
									</li>
									<li>
										CSS
									</li>
									<li>
										JavaScript
									</li>
									<li>
										Bootstrap
									</li>
									<li>
										React
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="flip-card">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<p className="card-title">Back-end Techonolgies</p>
						</div>
						<div class="flip-card-back">
						<div className="tools">
								<ul className="card-title-back">
									<li>
										Node.Js
									</li>
									<li>
										NPM
									</li>
									<li>
										Express.js
									</li>
									<li>
										HandleBars.js
									</li>
									<li>
										AWS
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="flip-card">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<p className="card-title">Database Techonolgies</p>
						</div>
						<div class="flip-card-back">
						<div className="tools">
								<ul className="card-title-back">
									<li>
										MySQL
									</li>
									<li>
										MongoDB
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Skills;
