const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);
  return result;
};

const multiply = function(...numbers) {
  const result = numbers.reduce((acc, current) => {
    return acc * current;
  });
  return result;
};

const power = function(number, power) {
	let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
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
