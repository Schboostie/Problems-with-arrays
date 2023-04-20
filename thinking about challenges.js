/*
Problems in JavaScript array methods:

Write a function that takes an array of numbers as input and returns a new array containing only the even numbers in the input array.

Write a function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than or equal to a specified number.

Write a function that takes an array of objects as input, where each object has a "name" property, and returns a new array containing only the names of the objects that start with a specified letter.

Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

Write a function that takes an array of strings as input and returns the longest string in the array.

Write a function that takes an array of numbers as input and returns a new array containing the same numbers, sorted in descending order.

Write a function that takes an array of objects as input, where each object has a "name" and "age" property, and returns a new array containing only the names of the objects that are over a certain age.

Write a function that takes two arrays of numbers as input and returns a new array containing only the numbers that are in both input arrays.

Write a function that takes an array of numbers as input and returns a new array containing only the numbers that are prime.

Write a function that takes an array of strings as input and returns a new array containing the same strings, but with all vowels removed.

These are just a few examples, but there are many more intermediate level problems you can solve with array methods in JavaScript.

*/


// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers in the input array.

function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Example usage:
getEvenNumbers([1, 2, 3, 4, 5, 6]); // Returns [2, 4, 6]



function getEvenNumbers(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

// Example usage:
getEvenNumbers([1, 2, 3, 4, 5, 6]); // Returns [2, 4, 6]


function getEvenNumbers(numbers) {
  return numbers.reduce((result, num) => {
    if (num % 2 === 0) {
      result.push(num);
    }
    return result;
  }, []);
}

// Example usage:
getEvenNumbers([1, 2, 3, 4, 5, 6]); // Returns [2, 4, 6]


// 2. Write a function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than or equal to a specified number.

function getStringsByLength(strings, minLength) {
  return strings.filter(str => str.length >= minLength);
}

// Example usage:
getStringsByLength(["apple", "banana", "orange", "grape"], 6); // Returns ["banana", "orange"]



function getStringsByLength(strings, minLength) {
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      result.push(strings[i]);
    }
  }

  return result;
}

// Example usage:
getStringsByLength(["apple", "banana", "orange", "grape"], 6); // Returns ["banana", "orange"]


function getStringsByLength(strings, minLength) {
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      result.push(strings[i]);
    }
  }

  return result;
}

// Example usage:
getStringsByLength(["apple", "banana", "orange", "grape"], 6); // Returns ["banana", "orange"]


//














































































