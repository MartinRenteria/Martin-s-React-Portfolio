import React from "react";
import Logo from "./logo.png"
import "./navbar.css"

function NavBar() {
    return (
  <nav class="navbar navbar-expand-lg navbar-dark">
      <img width="100" src={Logo} alt="Logo"></img>
    <button class="navbar-toggler collapse" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="About Me">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Portfolio">Contacts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://drive.google.com/file/d/11yz1mUiFv9g7L8MG8uGa0eHHTUBpTrVg/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </li>
      </ul>
      </div>
</nav>
    )
}

export default NavBar;