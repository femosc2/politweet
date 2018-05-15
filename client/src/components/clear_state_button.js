import React, { Component } from "react";
import "../styles/clear_state_button.css"

class ClearStateButton extends Component {
  handleClick() {
		this.props.clearState();
  }

  render() {

		return (
        <a clearState={this.props.clearState}
<<<<<<< HEAD
          className="waves-effect waves-light btn clearStateButton"
=======
          className="waves-effect waves-light btn-large clearStateButton"
>>>>>>> 0fb93fa6dc63ea7c451a645a5fc37e93d9ce627b
          onClick={() => {this.handleClick()}}>RESET</a>


    );
  }
}

export default ClearStateButton;
