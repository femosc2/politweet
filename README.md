# Politweet

**Welcome to the Politweet!** A simple web application designed to compare swedish politicians based on their Twitter statistics. Follow the instrictions below, if you encounter any difficulties, don't hesitate to submit your issue [here](https://github.com/femosc2/politweet/issues).

### Tweepy

#### How to use and install the Tweepy library using Python2

The Politweet backend is built on Python2.7 utilizing the Tweepy API library and requires a computer capable of running Python2.7 scripts. Follow the instrictions below, if you encounter any difficulties, don't hesitate to submit your issue!

#### Windows

1. Download and install [Python2.7](https://www.python.org/downloads/release/python-2714/).
2. During the installation process make sure you tick the option to get "PIP" as well.
3. Once python2 with pip are both installed, open the cmd and type ```pip install tweepy```.

#### Mac

1. Download and install [Python2.7](https://www.python.org/downloads/release/python-2714/)
1. During the install process make sure you tick the option to get "PIP" as well.
2. Once python2 with pip are both installed, open your terminal and type```sudo pip install tweepy```.

Enter your computers password and press enter *(PW won't visually show in your terminal window, but it's there)*.

#### Linux

Python2.7 comes preinstalled on most Linux distros, if you have removed the python package you can get it by following these steps:

1. Open your terminal
2. Download/install Python2 with ```sudo apt-get install python```
3. Download/install PIP through ```apt-get install python-pip```
4. Once Python2 with PIP is installed, type ```pip install tweepy``` inorder to get the tweepy library.

## Usage

### 1.

Make sure that you have Node.js installed on your system.

If you don't, you can download node.js from [nodejs.org](https://nodejs.org/en/).

### 2.

Your next step will be to download/clone this Github-repo. If you are familiar with Github, you can clone it. If not, just download the zip-file and extract it to a suitable location.

### 3.

Now head over to your terminal or cmd, navigate to politweet/client and type:

```bash npm install```

This will install all the dependencies required to run the project.

### 4.

Navigate to the backend folder and type:

```bash npm install```

afterwards, start the backend by typing node app.js

### 5. 
Navigate to the tweets folder and type:

```python tweet.py```

Wait until the terminal tells you that the script is finished!

### 6.

Navigate back to the client folder and run the application by starting a local server with the following command:

```bash npm start```

### 5.

The server should start on localhost:3000 automatically, if it doesn't, you can navigate to it manually in your webbrowser.





### FAQ

#### Q1: I can't run the application: *'no module named tweepy'*

**A:**  This error may occur if you have not correctly installed *pip* or because pip is installed, but it's not installing tweepy in the correct dic/folder with the right path. For issues with *pip*, see Q2 below. For tweepy, check where you have python2 installed by writing ```which python``` Navigate to that dic/folder and write ```sudo pip install tweepy```

#### Q2: I get terminal errors when I try to install pip

**A:**  Make sure you have pip installed by writing ```pip -v``` in your terminal. It should give you an output, similar to this: *pip 9.0.1 from /Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages (python 2.7)*

If not, write ```easy_install pip``` , if you still recive errors, write ```sudo easy_install pip```

#### Q3: I can't start the application with python2

**A:** First, make sure that you have Python2 installed by writing ```python -V``` in your terminal.
+If you don't get the following output: * Python 2.7.14 * you have not installed Python2.
+Head back up and follow the install guide for your local OS.

<p align="center">
  <img src="https://thumbs.gfycat.com/HorribleNeglectedGrassspider-size_restricted.gif"><br>
    Don't forget to Star our repository! <br>
    <strong>Politweet</strong>
</p>
