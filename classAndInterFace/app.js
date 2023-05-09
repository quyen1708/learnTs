var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.display = function () {
        console.log("Rectangle with width ".concat(this.width, " and height: ").concat(this.height));
    };
    return Rectangle;
}());
var rect1 = new Rectangle(30, 40);
rect1.display();
