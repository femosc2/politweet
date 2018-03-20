#Politweet
======
##How to install Python2 and the Tweepy library
1.0. Installing
<br>The Politweet backend is built on Python2.7 utilizing the Tweepy API library and requires a computer capable of running Python2.7 scripts.

###Windows
1. Install [Python2.7](https://www.python.org/downloads/release/python-2714/) by downloading the installer.
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed open the CMD and type ```pip install tweepy```.
======
###Mac
1. Install [Python2.7](https://www.python.org/downloads/release/python-2714/) by downloading the installer.
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed open your terminal and type
```sudo pip install tweepy```
Enter your computers password and press enter (PW won't visually show in your terminal window but it's there)
======
###Linux
Python2.7 comes preinstalled on most Linux distros, if you have removed the python package you can get it by following these steps:
1. Open your terminal and type ```sudo apt-get install python```
2. Type sudo ```apt-get install python-pip``` in order to install pip.
3. Once python with pip is installed, type ```pip install tweepy```
======
##How to use tweet.py
1. Open up tweet.py with your texteditor of choice and add ```writeTweetsToJson(“@<Twitter Profile here>``` to the bottom of the page in order to specify what profiles you want to download.
2. Open up a terminal or a CMD and navigate to the directory where you downloaded the tweet.py file
3. Type ```python tweet.py``` and the profiles you specified in the script will be downloaded as JSON files.

<div style="text-align:center">![Steffe dabbar](https://thumbs.gfycat.com/HorribleNeglectedGrassspider-size_restricted.gif)</div>
