import React, { Component } from 'react';



/* This shows a single profile over a user */


class RosterProfile extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const selectedId = this.props.id;
    console.log("KLICKAD", this.props.id);
    return selectedId;
  };

  render() {
    const img = this.props.img;
    const id = this.props.id;
    const alt = this.props.alt;


    return (
    <div className="col s1"><img src={img} alt={alt} id={id} onClick={this.handleClick}></img></div>
    );
  }
}


export default RosterProfile;
