import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Logo from "./components/logo";
import StatContainer from "./components/stat_container";
import FightButton from "./components/fight_button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedFighter: null
    };

    this.selectFighter = this.selectFighter.bind(this);

  }

  selectFighter(fighterId) {
    this.setState({selectedFighter: fighterId});
  }

  render() {
      return (
        <div>
          <Roster selectFighter={this.selectFighter}/>
          <Header />
          <Navbar />
          <StatContainer selectedFighter={this.state.selectedFighter}/>
          <FightButton buttonText="FIGHT!" />
          <Logo />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
