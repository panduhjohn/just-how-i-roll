# Just How I Roll

### Introduction

This is a simple die-rolling app, with the HTML, CSS, and DOM manipulation JavaScript done for you. What you'll need to do is the math part. How do we get a random number in the right range for each die? That's for me to know and you to find out in... Just How I Roll.


### Steps

* Check out the HTML. Pretty straightforward overall, though we've used `<section>` tags instead of `<div>`s. This is part of the newer, more semantic style--a `<section>` is literally just another name for a `<div>`, but it's a much better one, and we'll explore some others as we go.

* Now check out the CSS. Also pretty basic, with some flexbox arrangment to make things line up a little better than generic `block` and `inline` styles would do it.

* Before we totally dive in, let's also look at the images in our project. There is a `d6` directory for the six sides of a standard (6-sided) die, then a `start` directory with single images of a d12 and a d20 (a die with 12 sides and a die with 20 sides), and finally a `numbers` directory, because it's really hard to find an image of each side of a d12 or a d20.

* Okay, let's tackle the JavaScript! The very first function is a block of code that runs when we roll a d6, named (hopefully clearly!) `rollD6`. It's got a bunch of DOM manipulation to change the d6 image according to a random roll, which you do _not_ need to alter in any way, but we _do_ need some code to get a random roll from 1-6. That's where you come in! Set the `roll` variable, which is currently set to `5`, to a random number.

* But first, above that `roll` variable, we'll need to make a variable and assign it a random floating point number from 0-1 

* Next, we'll need to make a variable that works off of that random number to get it within the range we want (0-6).

* But this variable still holds a floating point number. We need to round it UP to make it an integer 1-6.

* Once we have that, put the value in `roll`. Our DOM manipulation should do the rest!



### Stretch Goals

* Use [console.log](https://www.w3schools.com/jsref/met_console_log.asp) to print out each roll. This isn't the best way to debug your app, but it will allow us to double check that we're hitting all the numbers we should be hitting. Make sure there are no 13s in the d12 rolls, or anything like that. Including no 1s in the double d12 rolls. (If you don't know why, try imagining rolling a 1 with two dice! How did that go? Did you picture something? If so... how?)

* Add a new section below where we'll randomly shuffle through images that _aren't_ dice. Download at least 3 images according to a theme of your choice and place them in a new directory in the project. Name them using the same format as those in the `numbers` directory; this is how our code finds the right files to display! Then randomly choose a number from 1 to... however many images you have. Now display that image in the currently-commented-out html!

* Make the two double d6 rolls happen separately. There is a line at the top of the app that, if uncommented, will make the second die  launch the function `rollSecondDoubleD6` instead of `rollDoubleD6`. Then you'll have to move any code that has to do with the second die from that function to the bottom function. You also should then `console.log` the rolls separately as well, and change the heading in the HTML to indicate that the rolls are happening separately. (Document what's happening for your user! Confuse the user and they'll switch over to one of our die-rolling app competitors.)