import React, { Component } from "react";
import RosterProfile from "./roster_profile";
import "./roster.css"

// This component is a container for all the RosterProfile (fighters).
class Roster extends Component {
  render() {
  return (
    <div className="container" >
      <div className="row">
        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/bae.png" id="fighter1" alt="Annie Lööf"
        />

        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/stefan.png" id="fighter2" alt="Stefan Löfven"
        />
      </div>

      <div className="row">
        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/calleBILDT.png" id="fighter3" alt="Carl Bildt"
        />

        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/yungJonas.png" id="fighter4" alt="Jonas Sjöstedt"
        />
      </div>

      <div className="row">
        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/jimmie.png" id="fighter5" alt="Jimmie Åkesson"
        />

        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/Janbjörklund.png" id="fighter6" alt="Jan Björklund"
        />
      </div>

      <div className="row">
        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/ebbis.png" id="fighter7" alt="Ebba Busch Thor"
        />

        <RosterProfile
          selectFighter={this.props.selectFighter}
          img="style/images/isabellaLÖVIN.png" id="fighter8" alt="Isabella Lövin"
        />
      </div>
    </div>
    );
  }
}


export default Roster;
