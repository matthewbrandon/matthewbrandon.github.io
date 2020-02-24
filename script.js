// Matthew Brandon Thompson FEB 2020
// 5moji

// ----- CLASSES, CONSTANTS, AND VARIABLES -----

// Define a Player Class
class Player {
    constructor(number, deck, hand, spacesControlled, color) {
        this.number = number;
        this.deck = deck;
        this.hand = hand;
        this.spacesControlled = spacesControlled;
        this.color = color;

    }
}
// Create Players
player1 = new Player(1, [], [], [], "red");
player2 = new Player(2, [], [], [], "green");

// Define a Card Class
class Card {
    constructor(name, emoji, strongAgainst) {
        this.name = name;
        this.emoji = emoji;
        this.strongAgainst = strongAgainst;
    }
}
// Define possible cards
poop = new Card("poop", "💩", ["🤮", "❔"]);
sick = new Card("sick", "🤮", ["😂",  "❔"]);
happy = new Card("happy", "😂", ["😭",  "❔"]);
sad = new Card("sad", "😭", ["🤓",  "❔"]);
nerd = new Card("nerd", "🤓", ["💩",  "❔"]);
// List possible cards
const possibleCards = [poop, sick, happy, sad, nerd];
empty = new Card("empty", "❔", []);

// Array for the Board
var board = [empty, empty, empty, empty, empty, empty, empty, empty, empty];
var currentTurn = "p1";
var activeCard;
var boardStatus = "locked";

// Game Constants
const howManyPlayers = 2;
const howManyCards = 2;
const howManyRows = 3;
const howManyCoumns = 3;
const howManySymbols = 5;
const howManyOfEachCardInDeck = 2;

// ----- FUNCTION DEFINITIONS -----

// Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}   

// Create Decks
function createDeck(player) {
    for (i=0; i<howManyOfEachCardInDeck; i++) {
        for(j=0; j<possibleCards.length; j++) {
            player.deck.push(possibleCards[j]);
        }
    }
}

// Create Hands
function createHand(player) {
    for (i=0; i<howManyCards; i++) {
        var tempCard = player.deck[0];
        player.hand.push(tempCard);
        player.deck.shift();
    }
}

// Initialize Board Visual
function initializeBoard() {
    document.getElementById("p1c1").innerText = player1.hand[0].emoji;
    document.getElementById("p1c2").innerText = player1.hand[1].emoji;
    document.getElementById("p2c1").innerText = player2.hand[0].emoji;
    document.getElementById("p2c2").innerText = player2.hand[1].emoji;
    var spaces = document.getElementsByClassName("board");
    for (k=0; k<spaces.length; k++) {
        spaces[k].innerText = empty.emoji;
    }
}

// Refresh Cards in Hands
function refreshHands() {
    document.getElementById("p1c1").innerText = player1.hand[0].emoji;
    document.getElementById("p1c2").innerText = player1.hand[1].emoji;
    document.getElementById("p2c1").innerText = player2.hand[0].emoji;
    document.getElementById("p2c2").innerText = player2.hand[1].emoji;
}

// Start the Next Turn and Change Active Turn
function nextTurn() {
    clearHighlights();
    refreshHands();
    if (currentTurn === "p1") {
        currentTurn = "p2";
        p1turn();
    }
    else {
        currentTurn = "p1";
        p2turn();
    }
}

// Check Which Spots should become highlighted
function checkValidSpots(current) {
    clearHighlights();
    // console.log("Checking valid spots for" + current.emoji);
    for (i=1; i<=board.length; i++) {
        if (current.strongAgainst.includes(board[(i-1)].emoji)) {
            // console.log ("Space " + i + "can be occupied by " + current.emoji);
            document.getElementById("b" + i).classList.add("highlighted");
        }
        // TODO Will have to re-write this logic to account for no possible moves
    }
}

// See if a Player controls 3 spaces in a row (and wins!)
function checkVictory(who) {
    // Check who.spaces and see if it has a winning combo
    console.log("Checking victory for player " + who.number + ". They control: " + who.spacesControlled);
    function checkSet(a, b, c) {
        if (who.spacesControlled.includes(a) && who.spacesControlled.includes(b) && who.spacesControlled.includes(c)) {
            alert(who.color +" Player Wins!!!");
            restartGame();
        }
    }
    checkSet(1,2,3);
    checkSet(4,5,6);
    checkSet(7,8,9);
    checkSet(1,4,7);
    checkSet(2,5,8);
    checkSet(3,6,9);
    checkSet(1,5,9);
    checkSet(7,5,3);    
}

// Logic when a board space gets clicked
function spaceClicked(space) {
    board[(space-1)] = activeCard;
    document.getElementById("b" + space).innerText = board[(space-1)].emoji;
    // Check Player
    if (currentTurn === "p2") {
        // Change Color to current player
        document.getElementById("b" + space).classList.remove(player2.color);
        document.getElementById("b" + space).classList.add(player1.color);
        // Give control to current player
        player1.spacesControlled.push(space);
        player2.spacesControlled = player2.spacesControlled.filter(item => item !== space);
        checkVictory(player1);
    }
    else {
        document.getElementById("b" + space).classList.remove(player1.color);
        document.getElementById("b" + space).classList.add(player2.color);
        // Give control to current player
        player2.spacesControlled.push(space);
        player1.spacesControlled = player1.spacesControlled.filter(item => item !== space);
        checkVictory(player2);  
    }
    // Lock the Board and go to next player
    boardStatus = "locked";
    nextTurn();
}

// Stop Bouncing on all spaces
function clearHighlights() {
    //remove highlighted from all
    var everything = document.getElementsByTagName("div");
    for (i=0; i<everything.length; i++ ) {
        everything[i].classList.remove("highlighted");
    }
}

// Bounce p1 Cards
function p1turn() {
    // What are p1cards
    var p1cards = document.getElementsByClassName("p1");
    for (i=0; i<p1cards.length; i++) {
        // Make Bounce
        p1cards[i].classList.add("highlighted");
    }
}

// Bounce p2 Cards
function p2turn() {
    var p2cards = document.getElementsByClassName("p2");
    for (i=0; i<p2cards.length; i++) {
        // Make Bounce
        p2cards[i].classList.add("highlighted");
    }
}

// Watch for clicks at all times
function clicked(where) {
    switch(where) {
        case p1c1:
            console.log("p1c1 got clicked yall");
            // Make sure it is p1 Turn and Board is Locked
            if (currentTurn === "p2" && boardStatus === "locked") {
                // Active Card is the clicked one
                activeCard = player1.hand[0];
                // Remove Card from Hand
                player1.hand.splice(0, 1);
                // Add New Card to Hand
                player1.hand.push(player1.deck[0]);
                // Remove Card from Deck
                player1.deck.shift();
                // See if deck is empty, and refill
                if (player1.deck.length === 0) {
                    createDeck(player1);
                    shuffle(player1.deck);
                    console.log("Deck Was Emptied and refilled");
                }
                // Clear Image from card
                document.getElementById("p1c1").innerText = "";
                console.log("active card is now " + activeCard.emoji);
                // See which board spaces are clickable and make active
                checkValidSpots(activeCard);
                boardStatus = "open";
            }
        break;
        case p1c2:
            console.log("p1c2 got clicked homies");
            if (currentTurn === "p2" && boardStatus === "locked") {
                activeCard = player1.hand[1];
                player1.hand.splice(1, 1);
                player1.hand.push(player1.deck[0]);
                player1.deck.shift();
                if (player1.deck.length === 0) {
                    createDeck(player1);
                    shuffle(player1.deck);
                    console.log("Deck Was Emptied and refilled");
                }
                document.getElementById("p1c2").innerText = "";
                console.log("active card is now " + activeCard.emoji);
                checkValidSpots(activeCard);
                boardStatus = "open";
            }
        break;
        case p2c1:
            console.log("p2c1 got clicked my peeps");
            if (currentTurn === "p1" && boardStatus === "locked") {
                activeCard = player2.hand[0];
                player2.hand.splice(0, 1);
                player2.hand.push(player2.deck[0]);
                player2.deck.shift();
                if (player2.deck.length === 0) {
                    createDeck(player2);
                    shuffle(player2.deck);
                    console.log("Deck Was Emptied and refilled");
                }
                document.getElementById("p2c1").innerText = "";
                console.log("active card is now " + activeCard.emoji);
                checkValidSpots(activeCard);
                boardStatus = "open";
            }
        break;
        case p2c2:
            console.log("p2c2 got clicked in da house");
            if (currentTurn === "p1" && boardStatus === "locked") {
                activeCard = player2.hand[1];
                console.log("active card is now " + activeCard.emoji);
                player2.hand.splice(1, 1);
                player2.hand.push(player2.deck[0]);
                player2.deck.shift();
                if (player2.deck.length === 0) {
                    createDeck(player2);
                    shuffle(player2.deck);
                    console.log("Deck Was Emptied and refilled");
                }
                document.getElementById("p2c2").innerText = "";
                checkValidSpots(activeCard);
                boardStatus = "open";
            }
        break;
        case b7:
            console.log(where.id + " hath been clicked");
            // See if Board is clickable
            if (boardStatus === "open") {
                // See if Space is clickable
                if (document.getElementById("b7").classList.contains("highlighted")) {
                    spaceClicked(7);
                }
            }
        break;
        case b8:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b8").classList.contains("highlighted")) {
                    spaceClicked(8);
                }
            }
        break;
        case b9:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b9").classList.contains("highlighted")) {
                    spaceClicked(9);
                }
            }
        break;
        case b4:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b4").classList.contains("highlighted")) {
                    spaceClicked(4);
                }
            }
        break;
        case b5:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b5").classList.contains("highlighted")) {
                    spaceClicked(5);
                }
            }
        break;
        case b6:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b6").classList.contains("highlighted")) {
                    spaceClicked(6);
                }
            }
        break;
        case b1:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b1").classList.contains("highlighted")) {
                    spaceClicked(1);
                }
            }
        break;
        case b2:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b2").classList.contains("highlighted")) {
                    spaceClicked(2);
                }
            }
        break;
        case b3:
            console.log(where.id + " hath been clicked");
            if (boardStatus === "open") {
                if (document.getElementById("b3").classList.contains("highlighted")) {
                    spaceClicked(3);
                }
            }
        break;
    }
}
function restartGame() {
    //TODO, Clear Everything
}

// ----- GAMEPLAY LOGIC BEGINS -----

createDeck(player1);
createDeck(player2);
shuffle(player1.deck);
shuffle(player2.deck);
createHand(player1);
createHand(player2);
initializeBoard();
nextTurn();

// ----- TODO -----

// Draw new hand if no moves
// Reset Button
// Help on Hover
// Align text vertically
// Customize Colors
// Customize Emoji Set
// Save Scores
// Sounds
// Animations
// Rules Popup
// Let you change emoji in hand
// No Scrolling

