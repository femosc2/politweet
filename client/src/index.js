// import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Roster from "./components/roster";
<<<<<<< HEAD
import RosterProfile from "./components/roster_profile"
import Footer from "./components/footer"
=======
import RosterProfile from "./components/roster_profile";
import Nav from "./components/nav";
>>>>>>> e8c557e76baa40d0f08234e405271c40f582ed13

class App extends Component {
  render() {
      return (
        <div>
          <Header />
<<<<<<< HEAD
          <Roster />
          <Footer />
=======
          <Nav />
          <Roster />
>>>>>>> e8c557e76baa40d0f08234e405271c40f582ed13
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".wrapper"));
