import React, { Component } from 'react';

class Header extends Component {

    constructor() {
      super();
      this.state = {
        isVisible: true,
      };
    }

    render() {
        return (
          <div>
              { this.state.isVisible ? (
              <img className="headerImage" src="style/images/calle.jpg"></img>) : null }
              <div className="headerH1">Politweet</div>
              { this.state.isVisible ? (
              <button id="selectFighter" onClick={() => this.setState({
                  isVisible: !this.state.isVisible
                  })}>
            Choose your fighters!
          </button>) : null }
          </div>
        );
    }
}

export default Header;
