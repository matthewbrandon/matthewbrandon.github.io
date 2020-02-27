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
const foodHunger = 20;
const foodFullness = 10;
const maxFullness = 100;
const foodCost = 125;
const poopCost = 30;
const howFulltoPoop = 30;

// Set the initial values
var player = new Player(100, 5, 250);
var pet = new Pet("Lion", 20, 50, 45);


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
    // Checks
    if (howMuchPets < 1) {
        alert("Have to Pet at least once!");
        // TODO ANIMATION
        return false;
    }
    if (howMuchPets > (player.energy / pettingCost)) {
        alert("Not Enough Energy for the Pets!!");
        // TODO ANIMATION
        return false;
    }
    // TODO ANIMATION
    // Adjust Values
    player.energy -= (howMuchPets * pettingCost); 
    pet.happiness += petWebPal(howMuchPets);
    setValuesToLabels();
}

function feedClicked(howManyFood) {
    howManyFood = document.getElementById("givingfood").value;
    // console.log("Clicked FEED " + howManyFood + " Food");
    if (howManyFood < 1) {
        alert("Have to give at least 1!");
        // TODO ANIMATION
        return false;
    }
    if (howManyFood > player.food) {
        alert("Not Enough Food!!");
        // TODO ANIMATION
        return false;
    }
    if (pet.hunger < foodHunger) {
        alert("Not Hungry Enough!!");
        // TODO ANIMATION
        return false;
    }
    // Make Sure Pet isn't too full
    if ((pet.fullness + foodFullness) > maxFullness) {
        alert("Too Full!");
        // TODO ANIMATION 
        return false;
    }
    // TODO ANIMATION
    // Adjust Values
    player.food -= howManyFood; 
    pet.fullness += (howManyFood * foodFullness);
    setValuesToLabels();
}

function buyClicked(buyingFood) {
    buyingFood = document.getElementById("buyingfood").value;
    console.log("Clicked BUY " + buyingFood + " Food");
    if (buyingFood < 1) {
        alert("Must Buy at least One 🥨");
        return false;
    }
    if (player.money < (foodCost * buyingFood)) {
        alert("Not enough 💎");
        return false;
    }
    // TODO BUYING Animation
    player.money -= (foodCost * buyingFood);
    player.food += parseInt(buyingFood);
    setValuesToLabels();
}

function poopClicked() {
    console.log("Clicked Poop 💩💩");
    if (pet.fullness < howFulltoPoop) {
        alert("No Need to 💩💩");
        return false;
    }
    if (player.energy < poopCost) {
        alert ("Not Enough ⚡️⚡️");
        return false;
    }
    // TODO Animation
    pet.fullness = 0;
    player.energy -= poopCost;
    setValuesToLabels();
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

// Add Logic to Buttons

// New Animation Gifs

// APPARENTLY MP4 is much better than gif
// Nodding No
// Eating
// Being Pet (Happy)
// Sad Response

// ----- THOUGHTS -----

// An inventory of items you can click on
// Cool-Downs for each action
// Balance Numbers

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

