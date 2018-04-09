import React, { Component } from 'react';



/* This shows a single profile over a user */


class RosterProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let img = this.props.img
    let id = this.props.id


    return (
      <div className="grid-item" id={id}><img src={img}></img></div>
    );
  }
}


export default RosterProfile;
