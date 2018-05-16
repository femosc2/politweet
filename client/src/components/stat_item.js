import React, { Component } from "react";
import "../styles/stat_item.css";
import axios from 'axios';

/*
When the user selects a fighter this component renders a
list of the JSON data of the chosen fighter.
*/

class StatItem extends Component {
	constructor() {
		super();
		this.state = {
			name: null,
			description: null,
			followers: null,
			friends: null,
			accCreation: null
		}
	}

	componentDidMount() {
		axios.get("http://localhost:4000/" + this.props.selectedFighter)
			.then(response => {
				console.log(response);
				// const name = response.data["0"].name;
				// console.log(name);
				this.setState({name: response.data["0"].name});
				this.setState({description: response.data["0"].description})
				this.setState({followers: response.data["0"].followers_count})
				this.setState({friends: response.data["0"].friends_count})
				this.setState({accCreation: response.data["0"].created_at})
			})
			.catch(err => {
				console.log('err', err);
			});
	}

	render() {
	if (this.props.selectedFighter === null) {
		return (<div id="hiddenLoading">Loading</div>)
	}

	const statItem = require("../../tweets/" + this.props.selectedFighter + ".json");

	const wordCount = statItem.wordCount;

	return (
			<li id="statList">
				<div className="statItem"> {this.state.name} </div>
				<div className="statItem"> {this.state.description} </div>
				<div className="statItem"> Antal följare: {this.state.followers} </div>
				<div className="statItem"> Antal vänner: {this.state.friends} </div>
				<div className="statItem"> Kontot skapades: {this.state.accCreation} </div>
				<div className="statItem"> {wordCount} </div>
			</li>
		);
	}
}

export default StatItem;
