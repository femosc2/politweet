import React, { Component } from "react";
import "../styles/clear_state_button.css"

class ClearStateButton extends Component {
  render() {
		const buttonText = this.props.buttonText;
		return (

        <button className="clearStateButton" >
        {buttonText}

        </button>

    );
  }
}










export default ClearStateButton;
