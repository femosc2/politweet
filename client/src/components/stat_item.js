import React, { Component } from 'react';

/* When the user selects a fighter this component renders a list of the JSON data of the chosen fighter.
*/
class StatItem extends Component {
  render() {

    if (this.props.selectedFighter === null) {
      return (<div id="hiddenLoading">Loading</div>)
    }

    /* Chooses the JSON file for the selected fighter */
    const statItem = require("./" + this.props.selectedFighter + ".json");

    const image = statItem.image;
    const name = statItem.name;
    const description = statItem.description;
    const followers = statItem.followers;
    const friends = statItem.friends;
    const quotes = statItem.quotes;
    const mentions = statItem.mentions;
    const party = statItem.party;
    const age = statItem.age;
    const accCreation = statItem.accCreation;
    const wordCount = statItem.wordCount;

    return (
      <li id="statList">
        <div className="statItem"><p>{image}</p></div>
        <div className="statItem"><p>{name}</p></div>
        <div className="statItem"><p>{description}</p></div>
        <div className="statItem"><p>{followers}</p></div>
        <div className="statItem"><p>{friends}</p></div>
        <div className="statItem"><p>{quotes}</p></div>
        <div className="statItem"><p>{mentions}</p></div>
        <div className="statItem"><p>{party}</p></div>
        <div className="statItem"><p>{age}</p></div>
        <div className="statItem"><p>{accCreation}</p></div>
        <div className="statItem"><p>{wordCount}</p></div>
      </li>
    );
  }
}

export default StatItem;
