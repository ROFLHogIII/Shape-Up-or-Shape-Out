class Shape {
    constructor(height, length) {
        this.height = height;
        this.length = length;
    };
    getArea() {
        area = (this.length * this.height)
    }
    getPerimeter() {
        per = 2(this.length + this.height)
    }
}

class Square extends Shape {
    constructor (height, length){
        super (height, length)
    }
}
let square = new Square(height, length)
square.getArea()
square.getPerimeter()

class Rectangle extends Shape{
    constructor (height, length){
        super(height, length)
    }
}
let rectangle = new Rectangle(height, length)
rectangle.getArea()
rectangle.getPerimeter()

class Circle extends Shape{
    constructor(height){
        super (height)
    }
    getArea() {
        area = ( 3.14 * this.height * this.height)
    }
    getPerimeter() {
        per = 2 * 3.14 * (this.height)
    }
}
let circle = new Circle(height)
circle.getArea()
circle.getPerimeter()

class Triangle extends Shape{
    constructor(height){
        super (height)
    }
    getArea() {
        area = (this.height * this.height)/2
    }
    getPerimeter() {
        let hyp = Math.sqrt(Math.pow(this.height, 2) * 2);
        per = (2 * (this.height)) + hyp
    }
}
let triangle = new Triangle(height)
triangle.getArea()
triangle.getPerimeter()