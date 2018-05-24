import React, { Component } from "react";
import RosterProfile from "./roster_profile";
import "../styles/roster.css";

// This component is a container for all the RosterProfile(s) (fighters).
class Roster extends Component {
	render() {
		return (
			<div className="container" >
				<div className="row">
					<RosterProfile
						selectFighter={this.props.selectFighter}
					img="images/fighter1.png" id="fighter1" alt="Annie Lööf"
					/>

					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter2.png" id="fighter2" alt="Stefan Löfven"
					/>
				</div>

				<div className="row">
					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter3.png" id="fighter3" alt="Carl Bildt"
					/>

					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter4.png" id="fighter4" alt="Jonas Sjöstedt"
					/>
				</div>

				<div className="row">
					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter5.png" id="fighter5" alt="Jimmie Åkesson"
					/>

					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter6.png" id="fighter6" alt="Jan Björklund"
					/>
				</div>

				<div className="row">
					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter7.png" id="fighter7" alt="Ebba Busch Thor"
					/>

					<RosterProfile
						selectFighter={this.props.selectFighter}
						img="images/fighter8.png" id="fighter8" alt="Isabella Lövin"
					/>
				</div>
			</div>
		);
	}
}

export default Roster;
