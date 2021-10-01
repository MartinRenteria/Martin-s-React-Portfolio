import React from "react";
import "./navbar.css";
import Resume from "./Files/Resume.docx.pdf"

function Nav() {
	return (
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			  <div class="container-fluid">
			    <a class="navbar-brand" href="#MartinRenteria" rel="noreferrer"><h2>Martin Renteria</h2></a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="topnav collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#about">About Me</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#experience">Experience</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#projectHeader">Portfolio</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href={Resume}
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
			</div>
		</nav>

	);
}

export default Nav;
