let MAX = 600;
class Shape {
    constructor(height, length) {
        this.height = height;
        this.length = length;
    }
    getArea() {
        return (Number(this.length) * Number(this.height))
    }
    getPerimeter() {
        return 2 * (Number(this.length) + Number(this.height));
       
    }
};

class Square extends Shape {
    constructor(height, length) {
        super(height, length)
        let xVal = ranVal(0, MAX)
        let yVal = ranVal(0, MAX)
        let area = this.getArea()
        let perm = this.getPerimeter()
        this.div = $(`<div class="square" style="left:${xVal}px; top:${yVal}px; height: ${this.height}em; width:${this.length}em;"></div>`).appendTo(`#shape-box`);
        this.div.click(function () {
            $(`.shape-info`).empty()
            $(`<div>Type: Square</div>`).appendTo(`#Shape-Name`)
            $(`<div>Area: ${area}</div>`).appendTo(`#Area`)
            $(`<div>Perimeter: ${perm}</div>`).appendTo(`#Perimeter`)
            $(`<div>Width: ${this.length}</div>`).appendTo(`#Width`)
            $(`<div>Height: ${this.height}</div>`).appendTo(`#Height`)
        }.bind(this))
    }
};

class Rectangle extends Shape {
    constructor(height, length) {
        super(height, length)
        let xVal = ranVal(0, MAX)
        let yVal = ranVal(0, MAX)
        let area = this.getArea()
        let perm = this.getPerimeter()
        this.div = $(`<div class="rectangle" style="left:${xVal}px; top:${yVal}px; height: ${this.height}em; width:${this.length}em;"></div>`).appendTo(`#shape-box`);
        this.div.click(function () {
            $(`.shape-info`).empty()
            $(`<div>Type: Rectangle</div>`).appendTo(`#Shape-Name`)
            $(`<div>Area: ${area}</div>`).appendTo(`#Area`)
            $(`<div>Perimeter: ${perm}</div>`).appendTo(`#Perimeter`)
            $(`<div>Width: ${this.length}</div>`).appendTo(`#Width`)
            $(`<div>Height: ${this.height}</div>`).appendTo(`#Height`)
        }.bind(this))
    }
};

class Circle extends Shape {
    constructor(height) {
        super(height)
        let Radius = height;
        let xVal = ranVal(0, MAX);
        let yVal = ranVal(0, MAX);
        let area = this.getArea();
        let perm = this.getPerimeter();
        this.div = $(`<div class="circle" style="left:${xVal}px; top:${yVal}px; height: ${this.height * 2}em; width:${this.height * 2}em;"></div>`).appendTo(`#shape-box`);
        this.div.click(function () {
            $(`.shape-info`).empty()
            $(`<div>Type: Circle</div>`).appendTo(`#Shape-Name`)
            $(`<div>Area: ${area}</div>`).appendTo(`#Area`)
            $(`<div>Perimeter: ${perm}</div>`).appendTo(`#Perimeter`)
            $(`<div>Radius: ${Radius}</div>`).appendTo(`#Radius`)
        }.bind(this))
    }
    getArea() {
        return 3.14 * Number(this.height) * Number(this.height)
    }
    getPerimeter() {
        return 2 * 3.14 * Number(this.height)
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
})
$(`#rec`).click(function () {
    event.preventDefault()
    let height = $(`#height-r`).val()
    let length = $(`#length-r`).val()
    let rec = new Rectangle(height, length)
})
$(`#cir`).click(function () {
    event.preventDefault()
    let height = ($(`#radius`).val())
    let cir = new Circle(height)
    console.log(height)
})

function ranVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
