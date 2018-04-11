import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import Logo from "./components/logo";
import StatContainer from "./components/stat_container";
<<<<<<< HEAD
=======
import FightButton from "./components/fight_button";
// Imports all our React components needed in order to render our page(s)
>>>>>>> 71341eadab8bf203ee14ef5d5393881e949be6c8

class App extends Component {
  constructor() {
    super();

// Creates a state where no fighter is selected on page load, meaning: No stats will show until the user selects a fighter.
    this.state = {
      selectedFighter: ["fighter1", "fighter2"]
    };
<<<<<<< HEAD
    console.log(this.state);
=======

// Binds the function selectFighter since it needs accsess to the state and change it from null to the fighter the user selected
>>>>>>> 71341eadab8bf203ee14ef5d5393881e949be6c8
    this.selectFighter = this.selectFighter.bind(this);

  }

// Shows fighter stats on user click, depending on which figher the user selected. Logs result to the browser console.
  selectFighter(fighterId) {
    this.setState({selectedFighter: [fighterId, fighterId]});
  }

// Renders the different components imported above and returns them to ReactDOM below.
  render() {
      return (
        <div>
          <Roster selectFighter={this.selectFighter}/>
          <Header />
          <Navbar />
          <StatContainer selectedFighter={this.state.selectedFighter}/>
          <Logo />
        </div>
    );
  }
};

// Returns the list of componentss to render in our .wrapper and finally displays our components on the index.html page.
ReactDOM.render(<App />, document.querySelector(".wrapper"));
