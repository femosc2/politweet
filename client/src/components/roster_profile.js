import React, { Component } from "react";

// This component creates a fighter on click
class RosterProfile extends Component {
	handleClick() {
		const id = this.props.id;
		this.props.selectFighter(id);
	}

	render() {
		const img = this.props.img;
		const id = this.props.id;
		const alt = this.props.alt;

		return (
		<div className="col s6">
			<img src={img} alt={alt} id={id}
				onClick={() => {this.handleClick()}}>
			</img>
		</div>
		);
	}
}


export default RosterProfile;
