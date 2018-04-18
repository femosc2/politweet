import React, { Component } from "react";
import StatItem from "./stat_item";

// Renders a div containing the StatItems

class StatContainer extends Component {
  render() {
  return (
      <div className="theStatListContainer">
        <ul>
          <StatItem selectedFighter={this.props.selectedFighter}/>
        </ul>
      </div>
    );
  }
}

export default StatContainer;
