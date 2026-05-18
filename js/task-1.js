function makeTransition(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransition(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransition(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransition(10, 500)); // "You ordered 10 droids worth 5000 credits!"
