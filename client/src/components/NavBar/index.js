import React from "react";

const NavBar = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="brand-logo">
					Richard Burck 
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/gallery">Gallery</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
