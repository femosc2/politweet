import React, { Component } from "react";
import "../styles/header.css"

class Header extends Component {
	render() {
		return (
			<header>
				<img className="headerImage" src="/images/headerTest.png" alt="Carl Bildt" />
				<div className="headerH1">
					<h1>Politweet</h1>
				</div>

				<div className="headerH2">
					<h2>Choose your fighters</h2>
				</div>
			</header>
		);
	}
}

export default Header;
