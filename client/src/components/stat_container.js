import React, { Component } from "react";
import StatItem from "./stat_item";
import "../styles/stat_container.css";

// Renders a div containing the StatItems
class StatContainer extends Component {
	render() {
	return (
			<div className="theStatListContainer" id={this.props.id}>
				<ul>
					<StatItem selectedFighter={this.props.selectedFighter} setStats={(stats) => {this.props.setStats(stats)}}/>
				</ul>
			</div>
		);
	}
}

export default StatContainer;
