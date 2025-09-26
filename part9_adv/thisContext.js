const person = {
name: "Om",

  greet() {
  console.log(`Hi, I am ${this.name}`);
  }
}

person.greet()

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({ name: "OmDhar" })
boundGreet()

// bind, call and apply