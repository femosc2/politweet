import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import Logo from "./components/logo";
import StatContainer from "./components/stat_container";
import FightButton from "./components/fight_button";
// Imports all our React components needed in order to render our page(s)

class App extends Component {
  constructor() {
    super();

// Creates a state where no fighter is selected on page load, meaning: No stats will show until the user selects a fighter.
    this.state = {
      selectedFighter: []
    };

    console.log(this.state);

// Binds the function selectFighter since it needs accsess to the state and change it from null to the fighter the user selected

    this.selectFighter = this.selectFighter.bind(this);

  }

// Shows fighter stats on user click, depending on which figher the user selected. Logs result to the browser console.
  selectFighter(fighterId) {
    console.log(fighterId);
    this.setState({selectedFighter: [fighterId]});
  }

// Renders the different components imported above and returns them to ReactDOM below.
  render() {
      return (
        <div>
          <FightButton />
          <Roster selectFighter={this.selectFighter}/>
          <Header />
          <Navbar />

          { this.state.selectedFighter.map(fighter => {
              return <StatContainer selectedFighter={fighter}/>
            })
          }

          <FightButton buttonText="FIGHT!" />
          <Logo />
        </div>
    );
  }
};

// Returns the list of componentss to render in our .wrapper and finally displays our components on the index.html page.
ReactDOM.render(<App />, document.querySelector(".wrapper"));
