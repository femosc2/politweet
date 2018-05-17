import React, { Component } from "react";
import "../styles/clear_state_button.css"

class ClearStateButton extends Component {
  handleClick() {
    // Calls on clearState to empty state and remove fighters.
		this.props.clearState();
  }

  render() {
		return (
        <a clearState={this.props.clearState}
          className="waves-effect waves-light btn-large clearStateButton"
          onClick={() => {this.handleClick()}}>ÅTERSTÄLL</a>
    );
  }
}

export default ClearStateButton;
