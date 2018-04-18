import React, { Component } from "react";

/*
When the user selects a fighter this component renders a
list of the JSON data of the chosen fighter.
*/


class StatItem extends Component {
  render() {

<<<<<<< HEAD
  if (this.props.selectedFighter === null) {
    return (<div id="hiddenLoading">Loading</div>)
  }

  // Chooses the JSON file for the selected fighter
  const statItem = require("../../tweets/" + this.props.selectedFighter + ".json");

  // TODO make a list instead of a bunch of const's
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
        <div className="statItem"> {image} </div>
        <div className="statItem"> {name} </div>
        <div className="statItem"> {description} </div>
        <div className="statItem"> {followers} </div>
        <div className="statItem"> {friends} </div>
        <div className="statItem"> {quotes} </div>
        <div className="statItem"> {mentions} </div>
        <div className="statItem"> {party} </div>
        <div className="statItem"> {age} </div>
        <div className="statItem"> {accCreation} </div>
        <div className="statItem"> {wordCount} </div>
      </li>
=======
    if (this.props.selectedFighter === null) {
      return (<div id="hiddenLoading">Loading</div>)
    }

    // Chooses the JSON file for the selected fighter
    const statItem = require("../../tweets/" + this.props.selectedFighter + ".json");

    // TODO make a list instead of a bunch of const"s
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
          <div className="statItem"> {image} </div>
          <div className="statItem"> {name} </div>
          <div className="statItem"> {description} </div>
          <div className="statItem"> {followers} </div>
          <div className="statItem"> {friends} </div>
          <div className="statItem"> {quotes} </div>
          <div className="statItem"> {mentions} </div>
          <div className="statItem"> {party} </div>
          <div className="statItem"> {age} </div>
          <div className="statItem"> {accCreation} </div>
          <div className="statItem"> {wordCount} </div>
        </li>
>>>>>>> 1edd9c6f3d34e35f6bfe5f255318821d65bc61e8
    );
  }
}

export default StatItem;
