// WebPal
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
const pettingCost = 10;
const pettingHappiness = 5;

// Set the initial values
var player = new Player(100, 5, 250);
var pet = new Pet("Lion", 20, 50, 35);


// ----- LOGIC -----

function petWebPal(howMuchPets) {
    // return 10;
    // if (howMuchPets < 1) {
    //     return false;
    // }
    // else {
    //     return howMuchPets * 5;
    // }   
    return howMuchPets * pettingHappiness;
}

// Click Functions
function petClicked(howMuchPets) {
    howMuchPets = document.getElementById("pettingenergy").value;
    if (howMuchPets < 1) {
        alert("Have to Pet at least once!");
        // TODO ANIMATION
        return false;
    }
    // Make sure you have enough energy
    if (howMuchPets > (player.energy / pettingCost)) {
        alert("Not Enough Energy for the Pets!!");
        // TODO ANIMATION
        return false;
    }
    // console.log(howMuchPets + " Pets");
    // TODO ANIMATION

    // Decrease Energy
    player.energy -= (howMuchPets * pettingCost); 
    
    // Increase Happiness by X per pet
    pet.happiness += petWebPal(howMuchPets);
    
    // Update Values
    setValuesToLabels();
}

function feedClicked(howManyFood) {
    howManyFood = document.getElementById("givingfood").value;
    console.log("Clicked FEED " + howManyFood + " Food");
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

function setValuesToLabels() {
    document.getElementById("happiness").value = pet.happiness;
    document.getElementById("hunger").value = pet.hunger;
    document.getElementById("fullness").value = pet.fullness;
    document.getElementById("energy").value = player.energy;
    document.getElementById("food").value = player.food;
    document.getElementById("money").value = player.money;
}

// ----- RUNTIME -----
setValuesToLabels();

// ----- TODO -----

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

