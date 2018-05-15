const express = require('express');
const app = express();
const request = require("request");
const bearer_token = require("./config.js");
const twitter_api = 'https://api.twitter.com/1.1/users/lookup.json';


//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', async function (req, res) {
	const apiCall = {
    method: 'GET',
    url: twitter_api,
    qs: {
        "screen_name": "annieloof, swedishpm, carlbildt, jsjostedt, jimmieakesson, bjorklundjan, BuschEbba, isabellalovin",
        "exclude_replies": true,
        "count": 1
    },
    json: true,
    headers: {
        "Authorization": "Bearer " + bearer_token
    }
};
	request(apiCall, (error, response, body) => {
	  res.send(response);
	});

});


app.listen(4000, () => console.log('Example app listening on port 4000!'))
