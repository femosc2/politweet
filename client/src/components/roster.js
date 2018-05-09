import React, { Component } from "react";
import RosterProfile from "./roster_profile";
import "../styles/roster.css"

// This component is a container for all the RosterProfile (fighters).
class Roster extends Component {
	render() {
	return (
		<div className="container" >
			<div className="row">
				<RosterProfile
					selectFighter={this.props.selectFighter}
				img="images/annie_lööf.png" id="fighter1" alt="Annie Lööf"
				/>

				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/stefan_löfven.png" id="fighter2" alt="Stefan Löfven"
				/>
			</div>

			<div className="row">
				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/carl_bildt.png" id="fighter3" alt="Carl Bildt"
				/>

				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/jonas_sjöstedt.png" id="fighter4" alt="Jonas Sjöstedt"
				/>
			</div>

			<div className="row">
				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/jimmie_åkesson.png" id="fighter5" alt="Jimmie Åkesson"
				/>

				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/jan_björklund.png" id="fighter6" alt="Jan Björklund"
				/>
			</div>

			<div className="row">
				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/ebba_busch_thor.png" id="fighter7" alt="Ebba Busch Thor"
				/>

				<RosterProfile
					selectFighter={this.props.selectFighter}
					img="images/isabella_lövin.png" id="fighter8" alt="Isabella Lövin"
				/>
			</div>
		</div>
		);
	}
}

export default Roster;
