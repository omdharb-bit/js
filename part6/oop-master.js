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
// console.log(myCar.start());
// console.log(myCar.drive());



// Encapsulation- is a concept of restricting direct access to data object


class BankAccount {
  #balance = 10
  
  deposit(amount) {
    this.#balance += amount
    return this.#balance
  }
  getBalance() {
    return `$ ${this.#balance}`
  }
}
let account = new BankAccount()
// console.log(account.getBalance());



//  Abstraction- is a concept of hiding complex implementation details and showing only the necessary parts to the user

class CoffeeMachine{

  start() {
  // call DB
    // filter value
    return `Starting the machine... `
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`
  }
  
  pressStartButton() {
    this.start()
    this.brewCoffee()
  }
}
let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
 


//  Polymorphism - is a concept where a single function or method can work in different ways based on the object that it is acting upon.


class Bird{
  fly() {
  return`Flying......`
  }
}

class Penguin extends Bird{
  fly() {
  return `Penguins can't fly`
  }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
//  console.log(penguin.fly());
 

// Static methods

class Calculator{

  static add(a, b) {
  return a+b
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(4,3));

// console.log(Calculator.add(2,3));


// Getters and Setters  How do getters and setters work in JavaScript?

//   getters and setters in JavaScript serve to retrieve and update property values while allowing you to manage how those properties are accessed and modified, enhancing encapsulation and control within your objects. This understanding directly relates to how object-oriented programming aims to protect data and provide a clean interface for interaction.

 







class Employee{
  #salary;
  
  constructor(name, salary) {
    this.name = name
    this.salary=salary
  }
  
  get salary() {
  
    return `You are not allowed to see salary`
  }
  
  
  set salary(value) {
    if (value < 0) {
    console.error("Invalid Salary")
    } else {
     
    }
  }
  
}
let emp = new Employee("Alice", 50000)
console.log(emp.salary);
emp.salary= -64576
