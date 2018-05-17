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
							<h5 className="modalHeader">The creators of Politweet:</h5>
							<p>A couple of goa'gubbar currently studying Information Architecture at Malmö University consisting of
								 Adam Hermansson, Adam Nilsson, Felix Morau,
								John Iversen, and THE horunge Victor Persson.</p>
							<h5 className="modalHeader">Politweet's purpose:</h5>
							<p>Jackass warning text - det här har inget att göra med verkligheten, bara på skoj. Låt eller låt INTE
							denna hemsida påverka dina framtida politiska val.</p>
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
											<th>#</th>
											<th>Name</th>
											<th>Wins</th>
											<th>Losses</th>
											<th>Procent win</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>1</td>
											<td>Annie Lööf</td>
											<td>7</td>
											<td>3</td>
											<td>70%</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Stefan Löfven</td>
											<td>6</td>
											<td>4</td>
											<td>60%</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Jimmie Åkesson</td>
											<td>5</td>
											<td>4</td>
											<td>55.5%</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Jonas Sjöstedt</td>
											<td>3</td>
											<td>3</td>
											<td>50%</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Ebba Busch Thor</td>
											<td>2</td>
											<td>4</td>
											<td>33.3%</td>
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
