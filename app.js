class Shape {
    constructor(height, length) {
        this.height = height;
        this.length = length;
    };
    getArea() {
        area = (this.length * this.height)
    }
    getPerimiter() {
        per = 2(this.length + this.height)
    }
}
class Square extends Shape {
    constructor (height, length){
        super (height, length)
    }
}
let square = new Square(height, length)
