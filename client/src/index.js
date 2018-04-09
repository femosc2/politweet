// import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import RosterProfile from "./components/roster_profile";
import Nav from "./components/nav";

class App extends Component {
  render() {
      return (
        <div>
          <Header />
          <Nav />
          <Roster />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));
