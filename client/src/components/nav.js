import React, { Component } from 'react';

class Navbar extends Component {


  render() {

    return (
      /*
      <nav>
        <div className="Navbar">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">About</a>

            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>About</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </ul>
        </div>

        <div className="Navbar">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Leaderboard</a>

            <div id="modal2" class="modal">
                <div class="modal-content">
                  <h4>Leaderboard</h4>
                  <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
              </div>
            </ul>
          </div>
      </nav>
*/

        <div className="modalbox">
        <ul className="right kuken">
          <ul id="nav-mobile" class="right">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">About</a>

            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>About</h4>
              <p>Ett gäng kåta grabbar bestående av: Victor Blixten Persson, Felix Minelayer Morau, John Nav Iversen, Adam Danklord Hermansson och Adam Cuntdestroyer Nilsson</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </ul>

          <ul id="nav-mobile" class="right">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Leaderboard</a>

            <div id="modal2" class="modal">
                <div class="modal-content">
                  <h4>Leaderboard</h4>
                <p>Kristina är bezt</p>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
              </div>
            </ul>

          </ul>
        </div>




    );
  }
};

export default Navbar;
