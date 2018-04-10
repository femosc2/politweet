import React, { Component } from 'react';
import RosterProfile from "./roster_profile";

/* This class shows the roster where the user will pick what fighters he or she wants to use */
class Roster extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
            <div className="container" >
              <div className="row">
                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/annielööf.jpg" id="fighter1" alt="Annie Lööf"
                />

                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/stefam.jpg" id="fighter2" alt="Stefan Löfven"
                />

              </div>
              <div className="row">
                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/calle.jpg" id="fighter3" alt="Carl Bildt"
                />

                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/jonas.jpg" id="fighter4" alt="Jonas Sjöstedt"
                />

              </div>
              <div className="row">
                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/jimmie.jpg" id="fighter5" alt="Jimmie Åkesson"
                />

                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/janne.jpg" id="fighter6" alt="Jan Björklund"
                />

              </div>
              <div className="row">
                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/ebba.jpg" id="fighter7" alt="Ebba Busch Thor"
                />

                <RosterProfile
                  selectFighter={this.props.selectFighter}
                  img="style/images/isabella.jpg" id="fighter8" alt="Isabella Lövin"
                />

              </div>
            </div>
    );
  }
}


export default Roster;
