import React, { Component } from "react";
import "../styles/fight_button.css";

class FightButton extends Component {
	render() {
		console.log(this.props);
		if (this.props.stats.length < 2) {
			return (
				<div id="hiddenLoading">Laddar</div>
			) 
		}
		
		const fighter1 = this.props.stats[0].followers;
		const fighter2 = this.props.stats[1].followers;

		console.log(fighter1);
		console.log(fighter2);

		return (
			<div>
				<ul className="modalButton" id="show-modal-ul">
					<ul id="nav-mobile" className="">
						<a className="btn-large modal-trigger" href="#modal3" id="show-modal3"> KÄBBEL </a>
					<div id="modal3" className="modal fightContentHeight">
							<div className="modal-content fightContainer">
								<h4 className="modalHeader">Batalj</h4>
								<p>Här ska det slåss!!!!!!!!!</p>
								<h4> Följare för ditt första val: {fighter1}</h4>
								<h4> Följare för ditt andra val: {fighter2}</h4>
							<div className="modal-footer">
								<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
							</div>
						</div>
						</div>
					</ul>
				</ul>
			</div>
		);
	}
}

export default FightButton;
