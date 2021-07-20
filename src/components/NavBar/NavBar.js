import React from "react";
import "./navbar.css"

function NavBar() {
    return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">Martin Renteria</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="##navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About Me">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Portfolio">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Resume" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;