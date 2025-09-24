function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
this.make = make;
this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type} tea.`;
  };
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe()); 

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound.`;

}
let dog = new Animal("Dog");
console.log(dog.sound());
