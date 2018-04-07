import React, { Component } from 'react';
import RosterProfile from "./roster_profile";

class Roster extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
            <div className="grid-container">
              <RosterProfile img="style/images/annielööf.jpg" id="fighter1" />
              <RosterProfile img="style/images/stefam.jpg" id="fighter2" />
              <RosterProfile img="style/images/calle.jpg" id="fighter3" />
              <RosterProfile img="style/images/jonas.jpg" id="fighter4" />
              <RosterProfile img="style/images/jimmie.jpg" id="fighter5" />
              <RosterProfile img="style/images/janne.jpg" id="fighter6" />
              <RosterProfile img="style/images/ebba.jpg" id="fighter7" />
              <RosterProfile img="style/images/isabella.jpg" id="fighter8" />
            </div>
    );
  }
}


export default Roster;
