import { Deck } from "./modules/deck.js";
import { getSets, tableContainsSet, formSet } from "./modules/set.js";
import { playClickSound } from "./modules/audio.js";

const deck = new Deck();

var tableCards = [];
let winner = false;
let userInput = 0;

for (var i = 0; i < 12; i++) {
    tableCards.push(deck.draw());
}

while (!tableContainsSet(tableCards)) {
    for (var i = 0; i < 3; i++) {
        tableCards.push(deck.draw());
    }
}



console.log(getSets(tableCards));
let selectedCards = []

/* -------------------------------------------------------------------------- */
/*                                Adding Cards                                */
/* -------------------------------------------------------------------------- */


function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function checkSelected() {
    console.log(selectedCards);
    if (formSet(selectedCards[0], selectedCards[1], selectedCards[2])) {
        window.alert("You found a set!");
    } else {
        window.alert("Not a set!");
    }
}

function placeCards(tableCards) {
    const cardSpace = document.querySelector(".card-space")
    removeChildren(cardSpace)

    for (const element of tableCards) {
        const image = document.createElement("img");
        image.src = "images/" + element.id + ".png";
        image.id = element.id;

        image.addEventListener("click", async function () {
            playClickSound();
            this.style.borderColor = "red";
            let cardIndex = tableCards.findIndex(card => card.id == this.id);
            console.log(document.getElementById(this.id));
            console.log(tableCards[cardIndex]);
            if (selectedCards.includes(tableCards[cardIndex])) {
                window.alert("You already selected this card!");
                return;
            }
            selectedCards.push(tableCards[cardIndex]);
            await new Promise(r => setTimeout(r, 500));
            if (selectedCards.length === 3) {
                console.log(selectedCards);
                checkSelected();
                selectedCards = [];
                let cardElements = document.querySelectorAll(".container img");
                for (let card of cardElements) {
                    card.style.borderColor = "black";
                }
            }
        })

        cardSpace.appendChild(image);
    }
}


placeCards(tableCards, selectedCards, checkSelected);