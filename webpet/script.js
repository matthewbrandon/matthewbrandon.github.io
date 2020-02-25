// Crystal Pet
// Feb 2020 Matthew Brandon Thompson

// ----- DEFINITIONS -----
class Pet {
    constructor(name, happiness, energy, hunger, fullness) {
        this.name = name;
        this.happiness = happiness;
        this.energy = energy;
        this.hunger = hunger;
        this.fullness = fullness;
    }
}

// The energy you spend petting
var howMuchPets;

// ----- LOGIC -----
function petYourPet(howMuchPets) {
    decreaseEnergyPetting(howMuchPets);
    increaseHappinessPetting(howMuchPets);
}

const stuff = decreaseEnergyPetting;

function decreaseEnergyPetting(howMuchPets) {
    return howMuchPets * 3;
}

// on button push, do it

// ----- TODO -----

// Initialize Values
// Add Logic to Buttons

// ----- THOUGHTS -----

// Animoji, need to convert (online worked) from mov to mp4. May want something to do local.
// An inventory of items you can click on
// Cool-Downs for each action

// ----- 100C Concepts -----

// define attributes / variables
// number
// string
// boolean
// array
// dictionary / objects
// undefined
// sample if / else
// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

module.exports = decreaseEnergyPetting;