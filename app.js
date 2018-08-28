let MAX = 600;
class Shape {
    constructor(height, length) {
        this.height = height;
        this.length = length;
        $(this).click(function () {
            (`.shape-info`).empty()
            area = this.getArea();
            perm = this.getPerimeter();
            h = this.height
            l = this.length
            $(`<div>Area: ${area}</div>`).appendTo(`#Area`)
            $(`<div>Perimiter: ${perm}</div>`).appendTo(`#Perimeter`)
            $(`<div>Width: ${l}</div>`).appendTo(`#Width`)
            $(`<div>Height: ${h}</div>`).appendTo(`#Height`)
        });

    }
    getArea() {
        return (this.length * this.height)
    }
    getPerimeter() {
        return 2(this.length + this.height)
    }
};

class Square extends Shape {
    constructor(height, length) {
        super(height, length)
    }
};
//let square = new Square(height, length)
//square.getArea()
//square.getPerimeter()

class Rectangle extends Shape {
    constructor(height, length) {
        super(height, length)
    }
}
//let rectangle = new Rectangle(height, length)
//rectangle.getArea()
//rectangle.getPerimeter()

class Circle extends Shape {
    constructor(height) {
        super(height)
    }
    getArea() {
        return (3.14 * this.height * this.height)
    }
    getPerimeter() {
        return 2 * 3.14 * (this.height)
    }
}
//let circle = new Circle(height)
//circle.getArea()
//circle.getPerimeter()

class Triangle extends Shape {
    constructor(height) {
        super(height)
    }
    getArea() {
        return (this.height * this.height) / 2
    }
    getPerimeter() {
        let hyp = Math.sqrt(Math.pow(this.height, 2) * 2);
        return (2 * (this.height)) + hyp
    }
}
//let triangle = new Triangle(height)
//triangle.getArea()
//triangle.getPerimeter()

$(`#squ`).click(function () {
    event.preventDefault()
    let height = $(`#side-s`).val()
    let length = $(`#side-s`).val()
    let sq = new Square(height, length)
    let xVal = ranVal(0, MAX)
    let yVal = ranVal(0, MAX)
    $(`<div class="square" style="left:${xVal}px; top:${yVal}px; height: ${height}em; width:${length}em;"></div>`).appendTo(`#shape-box`)
    console.log($(`#side-s`).val())
})

function ranVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
