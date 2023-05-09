"use strict";
class Sharp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`Draw Sharp at ${this.x} and ${this.y}`);
    }
}
class Rectangle extends Sharp {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    display() {
        console.log(`Rectangle with width ${this.width} and height: ${this.height}`);
        console.log(`Position at ${this.x} and ${this.y}`);
    }
}
let rect1 = new Rectangle(0, 0, 30, 40);
rect1.display();
rect1.draw();
