import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
	render() {
		return (
			<header>
				<img className="headerImage" src="/images/header_test.png" alt="Splashimage" />
				<div className="headerH1">
					<h1>Politweet</h1>
				</div>

				<div className="headerH2">
					<h2>Välj dina kämpar</h2>
				</div>

				<ul className="modalButton">
					<p className="rubrik">VÄLJ DINA KÄMPAR</p>
				</ul>
			</header>
		);
	}
}

export default Header;
