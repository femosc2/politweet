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

def get_word_count(account):
    minigolf = open(account+"tweets.json", "r")
    lines = minigolf.readlines()
    word_count = []
    tweets = []
    for line in lines:
        tweets.append(line)
    print(len(tweets),  "words has", account, "written!")
            
    
get_word_count("@annieloof")
get_word_count("@bjorklundjan")
get_word_count("@BuschEbba")
get_word_count("@carlbildt")
get_word_count("@IsabellaLovin")
get_word_count("@jimmieakesson")
get_word_count("@jsjostedt")
get_word_count("@SwedishPM")