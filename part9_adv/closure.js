//  Closure- are functions that refer to free variables in their scope
//  A free variable is a variable that is not a local variable or a parameter
//  of the function, but is defined in an outer scope that encloses the function's scope.

function outer() {
  let counter = 0;
  return function () {
    counter++
    return counter;
  
  }

}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
