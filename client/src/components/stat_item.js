import React, { Component } from "react";
import "../styles/stat_item.css";
import axios from "axios";

/*
This component shall fetch data from the backend and
present it.
*/
class StatItem extends Component {
	constructor() {
		super();
		this.state = {
			name: null,
			description: null,
			followers: null,
			friends: null,
			accCreation: null,
			statusesCount: null
		}
	}

	componentDidMount() {
		axios.get("http://localhost:4000/" + this.props.selectedFighter)
			.then(response => {
				this.setState({name: response.data["0"].name})
				this.setState({description: response.data["0"].description})
				this.setState({followers: response.data["0"].followers_count})
				this.setState({friends: response.data["0"].friends_count})
				this.setState({accCreation: response.data["0"].created_at})
				this.setState({statusesCount: response.data["0"].statuses_count})
				this.props.setStats(this.state);
			})
			.catch(err => {
				console.log("err", err);
			});
	}

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


	render() {
	if (this.props.selectedFighter === null) {
		return (
			<div id="hiddenLoading">Laddar</div>
		)
	}

	const totalPoints = Math.floor((this.state.followers + this.state.friends + this.state.statusesCount) / 10000)
	
	return (
			<li id="statList">
				<div className="statItem"
				title="Personens namn på Twitter."> {this.state.name} </div>

				<div className="statItem"
				title="Personens beskrivning på Twitter."> {this.state.description} </div>

				<div className="statItem"
				title="Antal följare peronen har på Twitter.">
				Antal följare: {this.state.followers} </div>

				<div className="statItem"
				title="Antal vänner personen har på Twitter.">
				Antal vänner: {this.state.friends} </div>

				<div className="statItem"
				title="När personen skapade sitt Twitterkonto.">
				Kontot skapades: {this.state.accCreation} </div>

				<div className="statItem"
				title="Hur många statusar personen lagt upp totalt på Twitter.">
				Antal statusar: {this.state.statusesCount} </div>

				<div className="statItem"
				title="Räknas ut genom att dela totala antalet ord politkern använt med hur många statusar den gjort.">
				Antal ord per tweet i genomsnitt: {Math.floor(this.averageWord())} </div>

				<div className="statItem"
				title="Räknas ut genom att lägga ihop antal följare, vänner och hur många statusar invidiven gjort och sedan delas detta med 10 000.">
				Styrkepoäng: {totalPoints} </div>
			</li>
		);
	}
}

export default StatItem;
