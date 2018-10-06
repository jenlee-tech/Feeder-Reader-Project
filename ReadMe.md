# Feeder Reader Project by Jennifer Lee

## Project Overview:
In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. And this is where I continue their work by creating more test suites.  Udacity has provided the repository to clone, in order to start this project.  

## Motivation:
Why do we need to test web-base qpplications?  To ensure the quality of the app and note any broken features/elements/components, etc.  And this is where Jasmine comes in - this is an independent, behavior driven development framework for testing Javascript code.  In other words, the framework is used to help us test by "breaking" the Javascript code.  Another analogy is found in Udacity's FEND Nanodegree course, section 3, _Rethinking Tesing_ - "how much load can an airplane's wings take until it breaks?"  

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

* Webinar: FeedReader Testing (P4) Sept-23 walk-thru with @Lloan  - [Zoom](https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true)

* Mathew Cranford: [Feeder Reader Walkthrough](https://matthewcranford.com/feed-reader).