import React, { Component } from 'react';

/* When the user selects a fighter this component renders a list of the JSON data of the chosen fighter.
*/
class StatItem extends Component {
  render() {

    if (this.props.selectedFighter === null) {
      return (<div id="hiddenLoading">Loading</div>)
    }

    /* Chooses the JSON file for the selected fighter */
    const statItem1 = require("./" + this.props.selectedFighter + ".json");
    const statItem2 = require("./" + this.props.selectedFighter + ".json");

    const image1 = statItem1.image;
    const name1 = statItem1.name;
    const description1 = statItem1.description;
    const followers1 = statItem1.followers;
    const friends1 = statItem1.friends;
    const quotes1 = statItem1.quotes;
    const mentions1 = statItem1.mentions;
    const party1 = statItem1.party;
    const age1 = statItem1.age;
    const accCreation1 = statItem1.accCreation;
    const wordCount1 = statItem1.wordCount;

    const image2 = statItem2.image;
    const name2 = statItem2.name;
    const description2 = statItem2.description;
    const followers2 = statItem2.followers;
    const friends2 = statItem2.friends;
    const quotes2 = statItem2.quotes;
    const mentions2 = statItem2.mentions;
    const party2 = statItem2.party;
    const age2 = statItem2.age;
    const accCreation2 = statItem2.accCreation;
    const wordCount2 = statItem2.wordCount;

    return (
      <div>
        <li id="statList">
          <div className="statItem1">{image1}</div>
          <div className="statItem1">{name1}</div>
          <div className="statItem1">{description1}</div>
          <div className="statItem1">{followers1}</div>
          <div className="statItem1">{friends1}</div>
          <div className="statItem1">{quotes1}</div>
          <div className="statItem1">{mentions1}</div>
          <div className="statItem1">{party1}</div>
          <div className="statItem1">{age1}</div>
          <div className="statItem1">{accCreation1}</div>
          <div className="statItem1">{wordCount1}</div>
        </li>

        <li id="statList">
          <div className="statItem2">{image2}</div>
          <div className="statItem2">{name2}</div>
          <div className="statItem2">{description2}</div>
          <div className="statItem2">{followers2}</div>
          <div className="statItem2">{friends2}</div>
          <div className="statItem2">{quotes2}</div>
          <div className="statItem2">{mentions2}</div>
          <div className="statItem2">{party2}</div>
          <div className="statItem2">{age2}</div>
          <div className="statItem2">{accCreation2}</div>
          <div className="statItem2">{wordCount2}</div>
        </li>
      </div>
    );
  }
}

export default StatItem;
