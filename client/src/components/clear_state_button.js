import React, { Component } from "react";
import "../styles/clear_state_button.css"

class ClearStateButton extends Component {
  handleClick() {
		this.props.clearState();
  }
  render() {

		return (
        <a clearState={this.props.clearState}
          className="waves-effect waves-light btn clearStateButton"
          onClick={() => {this.handleClick()}}>RESET</a>


    );
  }
}

export default ClearStateButton;
