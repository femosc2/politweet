import React, { Component } from "react";
import "../styles/fight_button.css"

class FightButton extends Component {
	render() {
		const buttonText = this.props.buttonText;
		return (

				<ul className="modalButton">
					<ul id="nav-mobile" className="">
						<a className="waves-effect waves-light btn-large modal-trigger" href="#modal3"> {buttonText} </a>
						<div id="modal3" className="modal">
							<div className="modal-content">
								<h4 className="modalHeader">Battle</h4>
								<p>Statcontainers and fighterprofiles</p>
							</div>
							<div className="modal-footer">
								<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
							</div>
						</div>
					</ul>
				</ul>

		);
	}
}

export default FightButton;
