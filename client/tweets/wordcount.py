import json
import math


words_to_ignore = ["contributors", "null", "cordinates", "created_at",
 "entities", "hashtags", "symbols", "urls", "user_mentions", "favorite_count", 
 "favorited", "geo", "id_str", "in_reply_to_screen_name", "in_reply_to_status_id", "in_reply_to_status_id_str",
 "in_reply_to_user_id", "in_reply_to_user_id_str", "is_quote_status", "false", "lang",
 "retweet_count", "retweeted", "source", "truncated", "user", "contributors_enabled",
 "created_at", "default_profile", "default_profile_image", "description", "display_url",
 "expanded_url", "http", "indices", "favourites_count", "follow_request_sent",
 "followers_count", "geo_enabled", "following", "friends_count", "has_extended profile", "is_translation_enabled",
 "is_translator", "listed_count", "notifications", "profile_background_color", "profile_background_image_url",
 "profile_background_image_url_https", "profile_background_title", "profile_banner_url", "profile_image_url", 
 "profile_image_url_https", "profile_link_color", "profile_sidebar_border_color", "profile_sidebar_fill_color", "profile_text_color", "profile_use_background_image",
 "screen_name", "statuses_count", "time_zone", "translator_type", "none", "utc_offset", "verified", "C0DEED", "DDEF6", "333333",
 ""
 ]



def get_word_count(account):
    jsonData = open(account+"tweets.json", "r+")
    lines = jsonData.readlines()
    tweets = []


    for word in words_to_ignore:
        for line in lines:
            line.strip(word)
    jsonData.close()

    jsonData = open(account+"tweets.json", "r+")

    for line in lines:
        for word in line:
            tweets.append(word)
    print(math.floor((len(tweets)) / 140),  "words has", account, "tweeted!")
    jsonData.close()

    if account == "@bjorklundjan":
        jsonData = open("fighter6.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@annieloof":
        jsonData = open("fighter1.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@SwedishPM":
        jsonData = open("fighter2.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@jsjostedt":
        jsonData = open("fighter4.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@carlbildt":
        jsonData = open("fighter3.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@jimmieakesson":
        jsonData = open("fighter5.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    elif account == "@BuschEbba":
        jsonData = open("fighter7.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    else:
        jsonData = open("fighter8.json", "w")
        jsonData.write("{wordCount:" + str(len(tweets) / 140) + "}")
        jsonData.close()
    

            
    
get_word_count("@annieloof")
get_word_count("@bjorklundjan")
get_word_count("@BuschEbba")
get_word_count("@carlbildt")
get_word_count("@IsabellaLovin")
get_word_count("@jimmieakesson")
get_word_count("@jsjostedt")
get_word_count("@SwedishPM")

