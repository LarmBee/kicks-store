/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../src/components/home.css";
import cart from "../images/cart.png";
import search from "../images/search.png";
import shoes from "../images/shoes.png";

function Header() {
	return (
		<div className="main-header">
      <img alt="#"className="shoes" src={shoes} />
      <h1 className="logo-main">NIKE</h1>
			<div className="nav-items">
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Product</a>
				<a href="#">Testimonial</a>
				<a href="#">Shop</a>
				<img alt="#" className="cart" src={cart} />
				<img alt="#" className="search" src={search} />
				<button className="contact-button">Contact Us</button>
			</div>
		</div>
	);
}

export default Header;
