import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
import Footer from "./components/footer"
import StatContainer from "./components/stat_container";

class App extends Component {
  render() {
      return (
        <div>
          <Header />
          <Roster />
          <StatContainer />
          <Footer />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
