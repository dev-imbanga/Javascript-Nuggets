//The code you provided is a JavaScript function that takes an array of numbers as an argument 
// and returns a new array containing the squares of only the positive integers in the original array.

// explanations
//  inside the filter method:
// it removes any negative numbers and 
// non-integers from the original array.

// the map method iterates through the new array and
//  uses Math.pow(num,2) to square each number.
const squareList = (arr) => {
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
};

