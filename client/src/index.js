import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Modals from "./components/modals";
import Logo from "./components/logo";
import StatContainer from "./components/stat_container";
import FightButton from "./components/fight_button";
import ClearStateButton from "./components/clear_state_button";
import "./index.css";

class App extends Component {
	constructor() {
		super();
		/*
		Creates a state where no fighter is selected on page load,
		meaning: No stats will show until the user selects a fighter.
		*/
		this.state = {
			selectedFighter: [],
			stats: []
		};

		this.selectFighter = this.selectFighter.bind(this);
		this.clearState = this.clearState.bind(this);
		this.setStats = this.setStats.bind(this);
	}

	/*
	Shows fighter stats on user click, depending on which fighter
	the user selected. Logs result to the browser console.
	*/
	setStats(stats) {
		this.setState({stats:[...this.state.stats, stats]});
	}

	selectFighter(fighterId) {
		if (this.state.selectedFighter.length < 2 && this.state.selectedFighter.lastIndexOf(fighterId)) {
			this.setState({selectedFighter: [...this.state.selectedFighter, fighterId]})
		}

		else if (this.state.selectedFighter.length >= 2) {
			alert("Bara två kämpar kan slåss samtidigt!");
		}
	}

	/*
	A reset function which clears the selectFighter state
	making it possible to choose new fighters.
	*/
	clearState() {
			this.setState({
				selectedFighter: []
			})
			this.setState({
				stats: []
			})
	}

	// Renders the different components imported above and returns them to ReactDOM below.
	render() {
			return (
				<div>
					<Roster selectFighter={this.selectFighter} />
					<Header />
					<Modals />

				{ this.state.selectedFighter.map((fighterId, i) => {
					return <StatContainer selectedFighter={fighterId} key={i} setStats={(stats) => {this.setStats(stats)}} id={"statContainer" + this.state.selectedFighter.indexOf(fighterId).toString()}
							 />
					 	})
				}

					<FightButton stats={this.state.stats} selectedFighter={this.state.selectedFighter}/>
					<ClearStateButton clearState={this.clearState} />
					<Logo />
				</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".wrapper"));
