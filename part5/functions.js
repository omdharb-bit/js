/*
1. Write a function named `makeTea` that takes one parameter `typeOfTea` and returns a string "Making green tea"  when called with "green tea". 
Store the result in a variable named `teaOrder` 
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
  

}
 
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);


/*
2. Create a function named `orderTea` that takes one parameter `teaType` .Inside this function, create another function named `confirmOrder` that returns a string "Order confirmed for chai"`.
  Call the `confirmOrder` from within the `orderTea` function and return its result.
*/

function orderTea(teaType) {
  function confirmOrder() {
  return `Order confirmed for chai`
  }
return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3. Write an arrow function named `calculateTotal` that takes two parameters `price` and `quantity` and returns the total cost by multiplying them.
store the result in a variable named `totalCost`
*/

const calculateTotal = (price, quantity) => {

  return price * quantity;
} 
let totalCost