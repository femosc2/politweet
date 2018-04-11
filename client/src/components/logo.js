import React, { Component } from 'react';

/* Renders a logo on the website */

class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img className="logo1" alt="Tempo tax logga" src="style/images/logo_1.png"></img>
      </div>
    )
  }
}

export default Logo;
