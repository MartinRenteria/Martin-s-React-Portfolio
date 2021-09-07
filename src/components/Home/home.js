import React from 'react';
import "./home.css";
import Typewriter from "typewriter-effect";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import StarfieldAnimation from 'react-starfield-animation';

function Home() {
	return (
		<header className="headerContent" id="MartinRenteria">
			<section className="intro">
			<StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
				<Typewriter
					options={{ delay: 50 }}
					onInit={(typewriter) => {
						typewriter
							.start()
							.typeString(
								`Hi there, I'm Martin Renteria.<br/>A Full-Stack Software Engineer<br/>based in Bellevue, WA.<br/>`
							);
					}}
				/>
				<div id="icon">
					<a href="mailto:renteriamp96@gmail.com">
						<FcGoogle />
					</a>
					<a className="Github" href="https://github.com/MartinRenteria" target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
					<a
						className="Linkedin"
						href="https://www.linkedin.com/in/martin-renteria/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin />
					</a>
				</div>
				<div className="portfolioButtonContainer">
					<a href="#projectHeader">
						<button id="portfolioButton">View Portfolio</button>
					</a>
				</div>
			</section>
			</header>
	);
				}

export default Home;