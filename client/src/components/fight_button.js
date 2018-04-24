import React, { Component } from "react";
import "../styles/fight_button.css"

class FightButton extends Component {
  render() {
    const buttonText = this.props.buttonText;
    return (
      <a className="waves-effect waves-light btn-large"> {buttonText} </a>
    );
  }
}

export default FightButton;
