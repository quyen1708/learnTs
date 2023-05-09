class Sharp{
    protected x: number;
    protected y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y =y;
    }

    draw(): void {
        console.log(`Draw Sharp at ${this.x} and ${this.y}`)
    }
}

class Rectangle  extends Sharp {
    width: number;
    height: number;
   

    constructor(x: number, y:number, width: number, height: number) {
        super(x, y)
        this.width = width;
        this.height = height;
    }

    display(): void {
        console.log(`Rectangle with width ${this.width} and height: ${this.height}`);
        console.log(`Position at ${this.x} and ${this.y}`)
    }
}

let rect1 : Rectangle = new Rectangle(0, 0, 30, 40);

rect1.display();

rect1.draw()