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

		const fighter1Followers = this.props.stats[0].followers;
		const fighter2Followers = this.props.stats[1].followers;

		const fighter1Friends = this.props.stats[0].friends;
		const fighter2Friends = this.props.stats[1].friends;

		const fighter1StatusesCount = this.props.stats[0].statusesCount;
		const fighter2StatusesCount = this.props.stats[1].statusesCount;

		const fighter1 = this.props.stats[0].name;
		const fighter2 = this.props.stats[1].name;

		const totalPointsFighter1 = Math.floor(((fighter1Followers + fighter1Friends + fighter1StatusesCount) / 10000) + Math.floor(Math.random() * 10) + 1);
		console.log(totalPointsFighter1);
		const totalPointsFighter2 = Math.floor(((fighter2Followers + fighter2Friends + fighter2StatusesCount) / 10000) + Math.floor(Math.random() * 10) + 1);
		console.log(totalPointsFighter2);

		const imgsrc1 = "../../images/" + this.props.selectedFighter[0] + ".png";
		const imgsrc2 = "../../images/" + this.props.selectedFighter[1] + ".png";

		if (totalPointsFighter1 > totalPointsFighter2) {
			return (
				<div>
					<ul className="modalButton" id="show-modal-ul">
						<ul id="nav-mobile" className="">
							<a className="btn-large pulse modal-trigger" href="#modal3" id="show-modal3"> KÄBBEL </a>
						<div id="modal3" className="modal fightContentHeight">
								<div className="modal-content fightContainer">
									<h4 className="modalHeader">Batalj</h4>
									<h5 id="fadeIn"> Vinnaren är: {fighter1}! </h5>
									<img id="imgFighter1" src={imgsrc1} />
									<img id="imgFighter2" src={imgsrc2} />
								<div className="modal-footer">
									<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
								</div>
							</div>
							</div>
						</ul>
					</ul>
				</div>
			);

		} else if (totalPointsFighter1 === totalPointsFighter2) {
			return (
				<div>
					<ul className="modalButton" id="show-modal-ul">
						<ul id="nav-mobile" className="">
							<a className="btn-large pulse modal-trigger" href="#modal3" id="show-modal3"> KÄBBEL </a>
						<div id="modal3" className="modal fightContentHeight">
								<div className="modal-content fightContainer">
									<h4 className="modalHeader">Batalj</h4>
								<h5 id="fadeIn"> Bara käbbel! Det blev lika mellan {fighter1} och {fighter2}! </h5>
								<img id="imgFighter1" src={imgsrc1} />
								<img id="imgFighter2" src={imgsrc2} />
								<div className="modal-footer">
									<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
								</div>
							</div>
							</div>
						</ul>
					</ul>
				</div>
			);

		} else {
			return (
				<div>
					<ul className="modalButton" id="show-modal-ul">
						<ul id="nav-mobile" className="">
							<a className="btn-large pulse modal-trigger" href="#modal3" id="show-modal3"> KÄBBEL </a>
						<div id="modal3" className="modal fightContentHeight">
								<div className="modal-content fightContainer">
									<h4 className="modalHeader">Batalj</h4>
								<h5 id="fadeIn"> Vinnaren är: {fighter2}! </h5>
								<img id="imgFighter1" src={imgsrc1} />
								<img id="imgFighter2" src={imgsrc2} />
								<div className="modal-footer">
									<a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Stäng</a>
								</div>
							</div>
							</div>
						</ul>
					</ul>
				</div>
			);
		};

		}
	}

export default FightButton;
