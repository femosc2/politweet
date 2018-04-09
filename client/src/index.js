import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import Footer from "./components/footer"
import RosterProfile from "./components/roster_profile";

class App extends Component {
  render() {
      return (
        <div>
          <Header />
          <Navbar />
          <Roster />
          <Footer />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
