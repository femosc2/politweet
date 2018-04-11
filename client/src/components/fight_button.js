import React, { Component } from 'react';

/* Renders a fight button to the website */

class FightButton extends Component {
    render() {
      const buttonText = this.props.buttonText;
        return (
          <a class="waves-effect waves-light btn-large">{buttonText}</a>
        );
    }
}

export default FightButton;
