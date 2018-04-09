import React, { Component } from 'react';
import StatItem from './stat_item';


class StatContainer extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div>
        <ul>
          <StatItem />
        </ul>
      </div>
    );
  }
}

export default StatContainer;
