export function getSets(tableCards) {
    var sets = [];
    for (const first of tableCards) {
        for (const second of tableCards) {
            for (const third of tableCards) {
                if ((first != second && second != third && first != third) && (formSet(first, second, third))) {
                    let newSet = [first, second, third]

                    for (let set in sets) {
                        if (set.includes(newSet[0]) && set.includes(newSet[1]) && set.includes(newSet[2])) {
                            continue;
                        }
                    }

                    sets.push(newSet);
                }
            }
        }
    }
    return sets;
}

export function tableContainsSet(tableCards) {
    for (const first of tableCards) {
        for (const second of tableCards) {
            for (const third of tableCards) {
                if ((first != second && second != third && first != third) && (formSet(first, second, third))) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function formSet(card1, card2, card3) {
    let cards = [card1, card2, card3];
    let numShapes = cards.map(card => card.numShapes);
    let colors = cards.map(card => card.color);
    let shapes = cards.map(card => card.shape);
    let shadings = cards.map(card => card.shading);

    return (new Set(numShapes).size === 2) || (new Set(colors).size === 2)
        || (new Set(shapes).size === 2) || (new Set(shadings).size === 2) ? false : true;
}
