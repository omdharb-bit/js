let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
  return `${this.make} ${this.model} car got started in ${this.year}`
  }
}
// console.log(car.start());

function Person(name, age) {
  this.name = name
  this.age=age

}

let john = new Person("John Doe", 20)
// console.log(john.name);


function Animal(type) {
this.type=type
}

Array.prototype.Om = function () {
return`Custom method ${this}`
}

let myArray = [1, 2, 3,]
// console.log(myArray.Om());
let myNewArray = [1, 2, 3, 4, 5, 6, 7]
// console.log(myNewArray.Om());



// Classes,inheritence

class Vechile{

  constructor(make, model) {
  this.make=make
  this.model=model
  }
  start() {
    return `${this.model} is a car from ${this.make}`
  
  }
}

class Car extends Vechile{
  drive() {
  return `${this.make} : This is an inheritence example`
  }
}

let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start());
console.log(myCar.drive());
