import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Modals from "./components/modals";
import Logo from "./components/logo";
import StatContainer from "./components/stat_container";
import FightButton from "./components/fight_button";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    /*
    Creates a state where no fighter is selected on page load,
    meaning: No stats will show until the user selects a fighter.
    */
    this.state = {
      selectedFighter: []
    };

    // Gives selectFighter access to state.
    this.selectFighter = this.selectFighter.bind(this);
  }

  /*
  Shows fighter stats on user click, depending on which fighter
  the user selected. Logs result to the browser console.
  */
  selectFighter(fighterId) {
    if (this.state.selectedFighter.length < 2 && this.state.selectedFighter.lastIndexOf(fighterId)) {
      this.setState({selectedFighter: [...this.state.selectedFighter, fighterId]})
    }


    if (this.state.selectedFighter.length > 2) {
      // TODO show errormessage about arr being full.
    }
  }

  // Renders the different components imported above and returns them to ReactDOM below.
  render() {
      return (
        <div>
          <Roster selectFighter={this.selectFighter} />
          <Header />
          <Modals />

          { this.state.selectedFighter.map(fighterId => {
            return <StatContainer selectedFighter={fighterId} id={"statContainer" + this.state.selectedFighter.indexOf(fighterId).toString()}
                   />
          })
          }

          <FightButton buttonText="FIGHT!" />
          <Logo />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".wrapper"));
