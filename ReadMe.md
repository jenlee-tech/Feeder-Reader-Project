# Feeder Reader Project by Jennifer Lee


## Project Overview:
In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. And this is where I continue their work by creating more test suites.  Udacity has provided the repository to clone, in order to start this project.  


## Motivation:
Why do we need to test web-base qpplications?  To ensure the quality of the app and note any broken features/elements/components, etc after edits/changes.  And this is where Jasmine comes in - this is an independent, behavior driven development framework for testing Javascript code.  In other words, the framework is used to help us test by "breaking" the Javascript code.  Another analogy is found in Udacity's FEND Nanodegree course, section 3, _Rethinking Tesing_ - "how much load can an airplane's wings take until it breaks?"  


## Test Suites that were created:
* _RSS Feeds_
    * test that the allFeeds varible is defined
    * test that the above varible is not empty
    * test that for each feed, an URL is defined
    * test the above URL is not empty
    * test the above feed has a name
* _The Menu_
    * test the menu is hidden by default
    * test the menu hides and shows upon clicking (has a toggling behavior)
* _Initial Entries_
    * test after the loadfeed function runs, there is more than one feed
* _New Feed Selection_
    * test that each time after a loadFeed function runs, there are are different news feed.


## How do you test these "tests"? :wink:
1. You could download this repository by clicking the above button that states, "Clone or Download."  You will choose either Download Zip or Open in Desktop.  Put the files in one folder and open index.html in a modern day web browser. 

2. When you open index.html, you will see a newsFeed; towards the bottom of the page, you will see the Jasmine feature and the results of the test suites.  Everything will initially look awesome, green or teal (depending on your screen - no errors).

3. You could test the test suites by editing the allFeeds object in ./js/app.js and save it.  This will make the tests result in "fail."  When you refresh the index.html page, then you are going to see all these crazy lines of error in red/pink.  This will prove the test suites are working!  And they are doing what they are suppose to be doing.


## Prerequisites/Dependencies:
* A modern day web browser with Javascript enabled.


## Acknowledgements/Resources
* [Jasmine](https://jasmine.github.io/2.0/introduction.html)


* This repository contains starter code, comments and the original readme file from [Udacity's FeederReader Project](https://github.com/udacity/frontend-nanodegree-feedreader)

* Project Grading Rubric

* Webinar: FeedReader Testing (P4) Sept-23 walk-thru with @Lloan  - [Zoom](https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true)

* Mathew Cranford: [Feeder Reader Walkthrough - steps 1-4] (https://matthewcranford.com/feed-reader).

* Markdown cheat sheet from [Github:](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

* [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/) for Markdown files

* Udacity's Front End Nanodegree [Style Guides](https://github.com/udacity/frontend-nanodegree-styleguide)


## Further comments:
This project was really cool - it made me think in a different way on how to test Javascript apps.


## Licensing:
* Jasmine [license](https://github.com/jasmine/jasmine/blob/master/MIT.LICENSE)