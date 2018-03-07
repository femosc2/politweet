#!/usr/bin/env python
# encoding: utf-8
"""
---------------------------------------------------------------
OBS:                                                          |
Detta programmet fungearar bara i Python 2 pga tweepy modulen |
---------------------------------------------------------------
"""
import tweepy #https://github.com/tweepy/tweepy
import json
from time import gmtime, strftime, sleep


#Twitter API credentials Skaffa egna API credentials @ apps.twitter.com
consumer_key = 	"9fdjDcnEUV4db6fjfUdEjXQAY"
consumer_secret =   "lQcCAvN3rFhiArOquAiBgtMUZu8O3ept0ZezXtWiVupwSWkGXd"
access_key = 	"318449791-OUeKzhbSdbQzcy29bK3nkjAqqfEHxHFY9teugrYY"
access_secret = "qOnRIANIw0mXj51CORPs4ePqlwkfRh80vudbTGqyLe9Jt"



def writeTweetsToJson(screen_name):
    """Funktionen laddar ner upp till 3200 tweets från en användare"""

    #authorize twitter, initialize tweepy
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    api = tweepy.API(auth)

    #Indikerar när sekvensen där programmet hämtar tweets påbörjas
    print "Tweets från " + screen_name + " hämtas nu."

    #Tom lista där alla objekt kommer att sparas
    alltweets = []

    #Laddar hem 200 tweets åt gången (max)
    new_tweets = api.user_timeline(screen_name = screen_name,count=200)

    #Spara tweetsen i den tomma listan
    alltweets.extend(new_tweets)

    #save the id of the oldest tweet less one
    oldest = alltweets[-1].id - 1

    #Så länge där finns tweets så fortsätt ladda ner tweets
    while len(new_tweets) > 0:

        #all subsiquent requests use the max_id param to prevena
        new_tweets = api.user_timeline(screen_name = screen_name,count=200,max_id=oldest)

        #Sparar tweets
        alltweets.extend(new_tweets)

        #update the id of the oldest tweet less one
        oldest = alltweets[-1].id - 1

        print "...%s tweets nerladdade" % (len(alltweets))
        print strftime("%a, %d %b %Y %H:%M:%S", gmtime())

    #Skriver Tweets till en JSON fil VIKTIGT GLÖM INTE ATT BYTA NAMN PÅ FILEN SÅ ATT DU INTE SKRIVER ÖVER DEN GAMMLA
    file = open(screen_name + "tweets.json", 'wb')
    print "Skapar ett JSON dokument...."
    for status in alltweets:
        json.dump(status._json,file,sort_keys = True,indent = 4)

    #Stänger filen när tweetsen är nerladdade.
    print "Tweets från " + screen_name + " är hämtade och sparade."
    print "_"*40
    file.close()

if __name__ == '__main__':
    #Skriv vilket användarnamn du vill ladda ner tweets från (stora och små bokstäver viktigt)
    while True:
        writeTweetsToJson"@socialdemokrat")
        writeTweetsToJson("@RealDonaldTrump")
