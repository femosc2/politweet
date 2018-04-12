import React, { Component } from 'react';

class FightButton extends Component {
  render() {
    const buttonText = this.props.buttonText;
    return (
      <a class="waves-effect waves-light btn-large"> {buttonText} </a>
    );
  }
}

export default FightButton;
