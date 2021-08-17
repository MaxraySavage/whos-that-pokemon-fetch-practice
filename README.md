# Who's That Pokemon!
A quick implementation of the classic who's that pokemon game with the original 151 pokemon!
Using https://pokeapi.co/

## Goals
My goal for this project was to gain some experience working with external API's and make something kind of fun.
This project had the added benefit of being my first time using HTML canvas elements and editing images on the fly (to generate pokemon silhouettes).

## Current Functionality
On page load, picks a random pokemon and fetches info on that pokemon from the poke api.
Loads the pokemon sprite image, creates a silhouetted sprite then displays that.
When the user clicks, the original sprite is displayed along with the name of the pokemon.

## Future Steps
- [ ] Set canvas size dynamically based on view size
- [ ] Basic page styling to make things look nice
- [ ] Multiple choice options for user guesses 
- [ ] Keep track of correct vs. incorrect answers