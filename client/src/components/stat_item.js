import React, { Component } from 'react';

class StatItem extends Component {
  render() {

    if (this.props.selectedFighter === null) {
      return (<div>Loading</div>)
    }

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

      console.log("in stat_item", this.props.selectedFighter);

      return(
        <li id="statList">
          <div className="statItem">{image}</div>
          <div className="statItem">{name}</div>
          <div className="statItem">{description}</div>
          <div className="statItem">{followers}</div>
          <div className="statItem">{friends}</div>
          <div className="statItem">{quotes}</div>
          <div className="statItem">{mentions}</div>
          <div className="statItem">{party}</div>
          <div className="statItem">{age}</div>
          <div className="statItem">{accCreation}</div>
          <div className="statItem">{wordCount}</div>
          <div className="statItem">{this.props.selectedFighter}</div>
        </li>
      );

  }
}
// const StatItem = (props) => {
//   // alert(this.props);
//   const statItem = require("./fighter1.json");
//
//   const image = statItem.image;
//   const name = statItem.name;
//   const description = statItem.description;
//   const followers = statItem.followers;
//   const friends = statItem.friends;
//   const quotes = statItem.quotes;
//   const mentions = statItem.mentions;
//   const party = statItem.party;
//   const age = statItem.age;
//   const accCreation = statItem.accCreation;
//   const wordCount = statItem.wordCount;
//
//   return(
//     <li id="statList">
//       <div className="statItem">{image}</div>
//       <div className="statItem">{name}</div>
//       <div className="statItem">{description}</div>
//       <div className="statItem">{followers}</div>
//       <div className="statItem">{friends}</div>
//       <div className="statItem">{quotes}</div>
//       <div className="statItem">{mentions}</div>
//       <div className="statItem">{party}</div>
//       <div className="statItem">{age}</div>
//       <div className="statItem">{accCreation}</div>
//       <div className="statItem">{wordCount}</div>
//       <div>{this.props.selectedFighter}</div>
//     </li>
//   );
//
// }
export default StatItem;
