import React, { Component } from 'react';

class Navbar extends Component {


  render() {

    return (

        <div className="modalBox">
          <ul className="modalButton">

            <ul id="nav-mobile" class="right">
              <a class="waves-effect waves-light btn modal-trigger" href="#modal1">About</a>

              <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4 class="modalHeader">About</h4>
                  <p>Ett gäng goa'gubbar bestående av: Victor Blixten Persson, Felinux von krach Morau, John Nav Iversen, Adam Blackbeard Danklord Hermansson samt Adam musförgöraren Nilsson</p>
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
                  <h4 class="modalHeader">Leaderboard</h4>
                  <p>Kristina är bezt, ingen protest</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Namn</th>
                        <th>Plats</th>
                        <th>Procent winz</th>
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
