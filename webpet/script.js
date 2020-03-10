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
let player = new Player(100, 5, 250);
let pet = new Pet("Lion", 20, 50, 45);

// Page Variables
// Video list based on http://jsfiddle.net/bnzqkpza
// TODO Needs more videos
var petVideo = document.getElementById("petvideo");
var videoList = [
    "./assets/lion-neutral.mp4",
    "./assets/lion-eat.mp4"
];
var activeVideo = 1;
// activeVideo.removeAttribute("loop");
petVideo.addEventListener('ended', function(e) {
    activeVideo = 0;
    petVideo.src = videoList[activeVideo];
    petVideo.setAttribute("loop", "loop");
    petVideo.play();
  });


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
    if (player.energy < pettingCost) {
        alert("Not Enough Energy for the Pets!!");
        // TODO ANIMATION
        return false;
    }
    // TODO ANIMATION
    // Adjust Values
    player.energy -= pettingCost; 
    pet.happiness += pettingHappiness;
    setValuesToLabels();
}

function feedClicked(howManyFood) {
    if (player.food < 1) {
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
    player.food -= 1; 
    pet.fullness += foodFullness;
    setValuesToLabels();
}

function buyClicked(buyingFood) {
    if (player.money < foodCost) {
        alert("Not enough 💎");
        return false;
    }
    // TODO BUYING Animation
    player.money -= foodCost;
    player.food += 1;
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

var inputs;
inputs = document.getElementsByTagName("input");

// TODO Replace with Loop
function setValuesToLabels() {
    //console.log(inputs);
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

// New Animation Videos
// APPARENTLY MP4 is much better than gif
// Nodding No
// Eating
// Being Pet (Happy)
// Sad Response

// Concepts to Add:
// Array (Add to Front, End and Update)
// Dictionary
// Loops (For, For/in, While, do while, forEach)

// ----- THOUGHTS -----

// An inventory of items you can click on
// Cool-Downs for each action
// Balance Numbers

// EXPORT is necessary for unit testing with script.test.js
// But is not compatible with browser testing locally
// export {
//     petWebPal,
// }

// 