const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((sum, number) => sum * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	// Catch negatives even if that'd be invalid
  if (a <= 0) {return 1};
  currentProduct = 1;
  for (let i = a; i > 0; i--) {
    currentProduct *= i;
  }
  return currentProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
