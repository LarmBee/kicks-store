import React from "react";
import nike6 from "../images/nike6.png";
import nike7 from "../images/nike7.png";
import nike8 from "../images/nike8.png";

function About() {
	return (
		<div>
			<h1>About Us</h1>
			<div className="about-box">
				<img className="img-about" src={nike6} />
				<div className="about-info">
					<h2>WE PROVIDE HIGH QUALITY SHOES</h2>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat"
					</p>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<button className="contact-button">Explore More</button>
				</div>
				<div>
					<img className="img-two"alt="#" src={nike8} />
					<h2>WE PROVIDE HIGH QUALITY SHOES</h2>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat"
					</p>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
