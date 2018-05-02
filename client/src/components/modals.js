import React, { Component } from "react";
import "../styles/modals.css";

/*
Boilerplate with static data for the leaderboard- and about buttons.
Will be changed later with real functionality.
*/

class Modals extends Component {
  render() {
    return (
      <div className="modalBox">
        <ul className="modalButton">
          <ul id="nav-mobile" className="right">
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">About</a>
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h4 className="modalHeader">About</h4>
                <p>Ett gäng goa'gubbar bestående av: Victor Persson, Felinux Morau,
                John Iversen, Adam Hermansson samt Adam Nilsson</p>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </ul>

          <ul id="nav-mobile" className="right">
            <a className="waves-effect waves-light btn modal-trigger" href="#modal2">Leaderboard</a>
            <div id="modal2" className="modal">
              <div className="modal-content">
                <h4 className="modalHeader">Leaderboard</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Namn</th>
                      <th>Plats</th>
                      <th>Procent win</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Annie Lööf</td>
                      <td>1</td>
                      <td>72.5%</td>
                    </tr>
                    <tr>
                      <td>Stefan Löfven</td>
                      <td>2</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>Jimmie Åkesson</td>
                      <td>3</td>
                      <td>46.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Modals;
