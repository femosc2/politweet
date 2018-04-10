import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import StatContainer from "./components/stat_container";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedFighter: null
    };

    this.selectFighter = this.selectFighter.bind(this);

  }

  selectFighter(fighterId) {
    console.log(fighterId);
    this.setState({selectedFighter: fighterId});
  }

  render() {
      return (
        <div>
          <Roster selectFighter={this.selectFighter}/>
          <Header />
          <Navbar />
          <StatContainer selectedFighter={this.state.selectedFighter}/>
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
