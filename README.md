Politweet

1.0. Installing
The Politweet backend is built on Python2.7 utilizing the Tweepy API library and requires a computer capable of running Python2.7 scripts.

1.1 Windows
Install Python2.7 by downloading the installer found on http://www.python.org/downloads/release/python-2714/ during the download make sure you download PIP as well. Once python with pip is installed open the CMD and type pip install tweepy.

1.2 Mac
Install Python2.7 by downloading the installer found on https://www.python.org/downloads/release/python-2714/ during the download make sure you download PIP as well. Once python with pip is installed open a Terminal and type pip install tweepy.

1.3 Linux
Python2.7 comes preinstalled on most Linux distros, if you have removed the python package you can get it by typing sudo apt-get install python in a terminal. Type sudo apt-get install python-pip in order to install pip. Once python with pip is installed open a Terminal and type pip install tweepy.

2.0 Using tweet.py
Open up tweet.py with your texteditor of choice and add writeTweetsToJson(“@<Twitter Profile here> to the bottom of the page in order to specify what profiles you want to download. Open up a terminal or a CMD and navigate to the directory where you downloaded the tweet.py file, type python tweet.py and the profiles you specified in the script will be downloaded as JSON files.
