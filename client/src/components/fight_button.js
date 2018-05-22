import React, { Component } from "react";
import "../styles/fight_button.css";

class FightButton extends Component {
	render() {
		const buttonText = this.props.buttonText;
		const selectedFighter = this.props.selectedFighter;
		return (
				<ul className="modalButton">
					<ul id="nav-mobile" className="">
						<a className="waves-effect waves-light btn-large modal-trigger" href="#modal3"> {buttonText} </a>
					<div id="modal3" className="modal fightContentHeight">
							<div className="modal-content fightContainer">
								<h4 className="modalHeader">Batalj</h4>
								<p>Här ska det slåss!!!!!!!!!</p>
								<h4> {selectedFighter} </h4>
								{	console.log({selectedFighter})}
							</div>
							<div className="modal-footer">
								<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
							</div>
						</div>
					</ul>
				</ul>
		);
	}
}

export default FightButton;
