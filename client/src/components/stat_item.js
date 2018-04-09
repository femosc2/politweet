import React, { Component } from 'react';

const StatItem = () => {

  const statItem = {
  image: "placeholder IMAGE",
  name: "placeholder NAMN",
  description: "placeholder DESCRIPTION",
  followers: "placeholder FOLLOWERS",
  friends: "placeholder FRIENDS",
  quotes: "placeholder QUOTES",
  mentions: "placeholder MENTIONS",
  party: "placeholder PARTY",
  age: "placeholder AGE",
  accCreation: "placeholder ACC_CREATION",
  wordCount: "placeholder WORDCOUNT"
};

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

  return(
    <li>
      <div>{image}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{followers}</div>
      <div>{friends}</div>
      <div>{quotes}</div>
      <div>{mentions}</div>
      <div>{party}</div>
      <div>{age}</div>
      <div>{accCreation}</div>
      <div>{wordCount}</div>
    </li>
  );
}

export default StatItem;
