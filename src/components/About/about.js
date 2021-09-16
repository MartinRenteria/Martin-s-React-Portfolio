import React from "react";
import "./about.css";

function About() {
	return (
		<section id="about">
			<h2 className="about-title">About Me</h2>
			
			<div className="aboutContainer">
				<br />
				<div class="card">
  <img class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
				<p className="aboutContent">
					When am not building websites and apps, you'll find me hiking, playing the piano and spending time
					with my family. <br />
					<br />
					I love to understand how things work, solving problems and taking on new challenges. I have a love
					for learning and i'm always eager to see what else software development has to offer. Each problem
					brings opportunity for growth and adds to my accomplishments as a software engineer.<br />
					<br />Am a graduate of the University of Washington Coding Bootcamp and currently enrolled in
					Generation USA's Junior Web Developer program to continue building my coding foundations. . With a
					Bachelors in Psychology, I intend to use my knowledge to build user friendly applications. Currently
					looking for my next opportunity. Feel free to contact me!
				</p>
			</div>
		</section>
	);
}

export default About;
