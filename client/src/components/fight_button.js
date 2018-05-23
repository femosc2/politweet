import React, { Component } from "react";
import axios from "axios";
import "../styles/fight_button.css";

class FightButton extends Component {
	render() {
		console.log(this.props);
		// const totalPoints = Math.floor((this.state.followers + this.state.friends + this.state.statusesCount) / 10000)

		return (
				<ul className="modalButton">
					<ul id="nav-mobile" className="">
						<a className="waves-effect waves-light btn-large modal-trigger" href="#modal3"> KÄBBEL </a>
					<div id="modal3" className="modal fightContentHeight">
							<div className="modal-content fightContainer">
								<h4 className="modalHeader">Batalj</h4>
								<p>Här ska det slåss!!!!!!!!!</p>
								<h4></h4>
							<div className="modal-footer">
								<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
							</div>
						</div>
						</div>
					</ul>
				</ul>
		);
	}
}

export default FightButton;
