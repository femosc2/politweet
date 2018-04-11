import React, { Component } from 'react';
import StatItem from './stat_item';

/* Renders a div containing the StatItems */

class StatContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="theStatListContainer">
          <ul className="theStatListContainer">
            <StatItem selectedFighter={this.props.selectedFighter[0]}/>
          </ul>
        </div>

        <div className="theStatListContainer">
          <ul className="theStatListContainer">
            <StatItem selectedFighter={this.props.selectedFighter[1]}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default StatContainer;
