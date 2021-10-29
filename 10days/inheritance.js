
class Rectangle {
    constructor(w,h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength,sideLength);
    }
}

const x = new Square(4);
const y = new Rectangle(9,5);

console.log(y.area());
console.log(x.area());
