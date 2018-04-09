import React, { Component } from 'react';



/* This shows a single profile over a user */


class RosterProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let img = this.props.img
    let id = this.props.id
    let alt = this.props.alt


    return (
    <div className="col s1"><img src={img} alt={alt} id={id}></img></div>
    );
  }
}


export default RosterProfile;
