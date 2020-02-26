// Crystal Pet
// Feb 2020 Matthew Brandon Thompson

// ----- DEFINITIONS -----
class Pet {
    constructor(name, happiness, hunger, fullness) {
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
        this.fullness = fullness;
    }
}

class Player {
    constructor(energy, food, money) {
        this.energy = energy;
        this.food = food;
        this.money = money;
    }
}

// Game Variables
var howMuchPets, howManyFood, buyingFood;

// ----- LOGIC -----
function petWebPal(howMuchPets) {
    // return 10;
    if (howMuchPets < 1) {
        return false;
    }
    else {
        return howMuchPets * 5;
    }   
}

function feedClicked(howManyFood) {
    howManyFood = document.getElementById("givingfood").value;
    console.log("Clicked FEED " + howManyFood + " Food");
    // TODO
}

function petClicked(howMuchPets) {
    howMuchPets = document.getElementById("pettingenergy").value;
    console.log(howMuchPets + " Pets");
    // TODO
}

function buyClicked(buyingFood) {
    buyingFood = document.getElementById("buyingfood").value;
    console.log("Clicked BUY " + buyingFood + " Food");
    // TODO
}

function poopClicked() {
    console.log("Clicked Poop 💩💩");
    // TODO
}


// ----- TODO -----

// Initialize Values into objects
// Display those values in the labels

// Add Logic to Buttons

// New Animation Gifs
// Nodding No
// Eating
// Being Pet (Happy)
// Sad Response

// ----- THOUGHTS -----

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
// lookup key to retrieve 

// EXPORT is necessary for unit testing with script.test.js
// But is not compatible with browser testing locally
// export {
//     petWebPal,
// }


// console.log("End of Script File");

