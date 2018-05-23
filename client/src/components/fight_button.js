import React, { Component } from "react";
import "../styles/fight_button.css";

class FightButton extends Component {
/*
	averageWord() {
		const wordCountFileReader = require("../../tweets/" + this.props.selectedFighter + ".json");

		if (this.state.statusesCount > 3200) {
			const wordCount = wordCountFileReader.wordCount / 3200;
			return wordCount;
		}

		else {
			const wordCount = wordCountFileReader.wordCount / this.state.statusesCount;
			return wordCount;
		}
	}

	<div className="statItem"
	title="Räknas ut genom att dela totala antalet ord politkern använt med hur många statusar den gjort.">
	Antal ord per tweet i genomsnitt: {Math.floor(this.averageWord())}
	</div>

*/
	render() {
		return (
				<ul className="modalButton">
					<ul id="nav-mobile" className="">
						<a className="waves-effect waves-light btn-large modal-trigger" href="#modal3"> {this.props.buttonText} </a>
					<div id="modal3" className="modal fightContentHeight">
							<div className="modal-content fightContainer">
								<h4 className="modalHeader">Batalj</h4>
								<p>Här ska det slåss!!!!!!!!!</p>
							<h4> {this.props.selectedFighter} </h4>
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
