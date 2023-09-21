export class Card {
    constructor(numShapes, color, shape, shading) {
        this.numShapes = numShapes;
        this.color = color;
        this.shape = shape;
        this.shading = shading;

        let shadingLocation = function () {
            if (shading === "Solid") {
                return 0;
            } else if (shading === "Striped") {
                return 27;
            } else {
                return 54;
            }
        };

        let shapeLocation = function () {
            if (shape === "Squiggle") {
                return 0;
            } else if (shape === "Diamond") {
                return 9;
            } else {
                return 18;
            }
        };

        let colorLocation = function () {
            if (color === "Red") {
                return 0;
            } else if (color === "Magenta") {
                return 3;
            } else {
                return 6;
            }
        };

        let numShapesLocation = function () {
            if (numShapes === 1) {
                return 0;
            } else if (numShapes === 2) {
                return 1;
            } else {
                return 2;
            }
        };

        this.id = shadingLocation() + shapeLocation() + colorLocation() + numShapesLocation() + 1;
    }
}
