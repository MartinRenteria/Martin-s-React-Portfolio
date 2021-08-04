import React from 'react';
import Logo from "./images/logo.png";
import "./navbar.css"

function Nav() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark" >
     <a class="navbar-title" href="/">
      <img className="Logo" width="100" src={Logo} alt="Logo"></img>
      <h1 >Martin Renteria</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="topnav collapse navbar-collapse" id="navbarScroll">
            <a class="nav-link" href="/AboutMe">About Me</a>
            <a class="nav-link" href="/Portfolio">Portfolio</a>
            <a class="nav-link" href="https://drive.google.com/file/d/11yz1mUiFv9g7L8MG8uGa0eHHTUBpTrVg/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </div>
  </nav>
  )
}

export default Nav;