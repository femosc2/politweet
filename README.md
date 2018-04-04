# Politweet #
<strong> Welcome to the Politweet!</strong> Follow the instrictions below, if you encounter any difficulties, don't hesitate to submit your issue [here](https://github.com/femosc2/politweet/issues), after you have read through the FAQ! The Politweet backend is built on Python2.7 utilizing the Tweepy API library and requires a computer capable of running Python2.7 scripts. 
<br>
## Windows ##
1. Download and install [Python2.7](https://www.python.org/downloads/release/python-2714/).
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed, open the cmd and type ```pip install tweepy```.

## Mac ##
1. Download and install [Python2.7](https://www.python.org/downloads/release/python-2714/)
2. During the install process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip is installed, open your terminal and type
```sudo pip install tweepy```.
<br>Enter your computers password and press enter <em>(PW won't visually show in your terminal window, but it's there)</em>

## Linux ##
Python2.7 comes preinstalled on most Linux distros, if you have removed the python package you can get it by following these steps:
1. Open your terminal
2. Download/install Python2 with ```sudo apt-get install python```
2. Download/install PIP through ```apt-get install python-pip```
3. Once Python2 with PIP is installed, type ```pip install tweepy``` inorder to get the tweepy library.

-------------
## How to use Politweet ##
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

## FAQ ##

#### Q1: I can't run the application: *'no module named tweepy'* ####
<strong>A:</strong>  This error may occur if you have not correctly installed *pip* or because pip is installed, but it's not installing tweepy in the correct dic/folder with the right path. For issues with *pip*, see Q2 below. For tweepy, check where you have python2 installed by writing ```which python``` Navigate to that dic/folder and write ```sudo pip install tweepy```

#### Q2: I get terminal errors when I try to install pip ####
<strong>A:</strong>  Make sure you have pip installed by writing ```pip -v``` in your terminal. It should give you an output, similar to this: *pip 9.0.1 from /Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages (python 2.7)*<br> If not, write ```easy_install pip``` , if you still recive errors, write ```sudo easy_install pip```

#### Q3: I can't start the application with python2 ####
<strong>A:</strong> First, make sure that you have Python2 installed by writing ```python -V``` in your terminal.
If you don't get the following output: * Python 2.7.14 * you have not installed Python2. 
Head back up and follow the install guide for your local OS.

<p align="center">
  <img src="https://thumbs.gfycat.com/HorribleNeglectedGrassspider-size_restricted.gif"><br>
  Don't forget to Star our repository/ <br>
  <strong>Politweet Enterprises™</strong>
</p>
