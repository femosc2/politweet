# Politweet #
#### How to use and install and the Tweepy library using Python2 <br> 

<strong>The Politweet backend is built on Python2.7 utilizing the Tweepy API library and requires a computer capable of running Python2.7 scripts. Follow the instrictions below, if you encounter any difficulties, don't hesitate to submit your issue! <br> Enjoy the Politweet!</strong>

### Windows ###
-------------
1. Download and tnstall [Python2.7](https://www.python.org/downloads/release/python-2714/).
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed, open the cmd and type ```pip install tweepy```.

### Mac ###
-------------
1. Download and install [Python2.7](https://www.python.org/downloads/release/python-2714/)
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed, open your terminal and type
```sudo pip install tweepy```.
<br>Enter your computers password and press enter <em>(PW won't visually show in your terminal window, but it's there)</em>

### Linux ###
-------------
<br>Python2.7 comes preinstalled on most Linux distros, if you have removed the python package you can get it by following these steps:
1. Open your terminal
2. Download/install Python2 with ```sudo apt-get install python```
2. Download/install PIP through ```apt-get install python-pip```
3. Once Python2 with PIP is installed, type ```pip install tweepy``` inorder to get the tweepy library.

### How to use Politweet ### 
-------------
<strong>Politweet is currently in the early stage of development. With our current build, you may download and store selected tweets through your cmd/terminal.</strong>
1. Clone/download all files in the Politweet repository.
2. Fling up your terminal or cmd.
3. Open the tweet.py file with your texteditor of choice and add
```writeTweetsToJson(“@<Twitter Profile here>``` 
to the bottom of the file in order to specify which twitter profiles you want to download.
4. Back in your terminal/cmd, navigate to the directory where you downloaded the tweet.py file
5. Launch the application by entering ```python tweet.py``` 
and the profiles you specified in the script will be downloaded as JSON files.
6. You will now see how thousands of tweets are being downloaded, exit the applicaiton with Ctrl + C
<br>
<p align="center">
  <img src="https://thumbs.gfycat.com/HorribleNeglectedGrassspider-size_restricted.gif"><br>
  Don't forget to Star our repository/ <br>
  <strong>Politweet Enterprises™</strong>
</p>
