words_to_ignore = []

import json

def annie():
    minigolf = open("@annielooftweets.json", "r")
    lines = minigolf.readlines()
    word_count = []
    tweets = []
    for line in lines:
        tweets.append(line)
    print(len(tweets))
    print(len(word_count))
            
    
annie()