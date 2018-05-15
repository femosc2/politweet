import React, { Component } from "react";
import "../styles/clear_state_button.css"

class ClearStateButton extends Component {
  onClick() {
		this.props.clearState();
  }

  render() {

		return (
        <a clearState={this.props.clearState}
          className="waves-effect waves-light btn clearStateButton"
          onClick={() => {this.onClick()}}>RESET</a>


    );
  }
}

export default ClearStateButton;
