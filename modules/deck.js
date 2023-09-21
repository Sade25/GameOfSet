import { Card } from "./card.js";

export class Deck {
    constructor() {
        this.cards = []
        for (let num_shapes = 1; num_shapes <= 3; num_shapes++) {
            ['Red', 'Green', 'Magenta'].forEach(color => {
                ['Diamond', 'Squiggle', 'Oval'].forEach(shape => {
                    ['Solid', 'Striped', 'Blank'].forEach(shading => {
                        this.cards.push(new Card(num_shapes, color, shape, shading));
                    });
                });
            });
        }
    }

    draw() {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        let card = this.cards.splice(randomIndex, 1)[0];
        return card;
    }

    size() {
        return this.cards.length;
    }
}
