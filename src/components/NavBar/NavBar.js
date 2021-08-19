import React from "react";
import "./navbar.css";

function Nav() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="topnav collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#about">About Me</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#project-title">Portfolio</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="https://drive.google.com/file/d/11yz1mUiFv9g7L8MG8uGa0eHHTUBpTrVg/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>

	);
}

export default Nav;
