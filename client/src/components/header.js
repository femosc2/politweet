import React, { Component } from 'react';

class Header extends Component {

    constructor() {
      super();
    }

    render() {
        return (
          <div>
              <img className="headerImage" src="style/images/calle.jpg"></img>
              <div classname="headerH1"><h1>Politweet</h1></div>
              <div classname="headerH2"><h2>Choose your fighters</h2></div>
          </div>
        );
    }
}

export default Header;
