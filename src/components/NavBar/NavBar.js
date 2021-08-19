import React from "react";
import "./navbar.css";

function Nav() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark">
			<a class="navbar-title" href="/">
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarScroll"
				aria-controls="navbarScroll"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="topnav collapse navbar-collapse" id="navbarScroll">
				<a href="#about">About Me</a>
				<a href="#project-title">Portfolio</a>
				<a
					href="https://drive.google.com/file/d/11yz1mUiFv9g7L8MG8uGa0eHHTUBpTrVg/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</div>
		</nav>
	);
}

export default Nav;
