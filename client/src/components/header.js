import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <div className="header">
              <img id="headerImage" src="style/images/calle.jpg"></img>
              <div id="headerH1">Politweet</div>
          </div>
        );
    }
}

export default Header;
