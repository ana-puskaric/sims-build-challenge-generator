# sims-build-challenge-generator

## About the project
This is a very very simple frontend app made with react. Used pure css to style it.
It generates a build challenge for the sims 4 game.

## How it works
Every time a button is clicked (or site is refreshed) a new challenge is generated.

The generated values are: 
- number of floors (1 - 4)
- number of rooms (1 - 10)
- house style
- number of sims
- lot size
- budget (12 000 - 100 000) 
- a 'must include' 
- color palette
- something to make the challenge more difficult if you want

The options for style, number of sims, lot size, must include and a more difficult option are stored in the data.json file. 
That seemed like the simplest most logical solution.

The app has a couple of different generator functions:
-one for the budget, rooms and floors with min and max values (both inclusive)
-one for getting a random item from an array (from data.json)
-one for generating a random color
-one for generating a color palette

I couldn't find an API for generating a color palette so i just made a simple function that picks 6 random characters from the "0123456789ABCDEF" string and adds them to a color string beggining with "#".
This function is called 5 times in the generateColorPalette function that makes sure no color is repeated (even though is isn't very likely to happen) and stores them in an array. If you want more colors you just need to change the number in the for loop since the colors are displayed using .map that creates a new div element for every color in the palette.

## Motivation
I just didn't like any of the generators i found online so i wanted to make my own.

## What i learned
How easy it is to make a random color generator.
How to store data in a json file and how to use it.
How to write a README.md file.