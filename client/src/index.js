import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Navbar from "./components/nav";
import Footer from "./components/footer"
import StatContainer from "./components/stat_container";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedFighter: null
    };
    
  }
  render() {
      return (
        <div>
          <Header />
          <Navbar />
          <Roster />
          <StatContainer />
          <Footer />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
