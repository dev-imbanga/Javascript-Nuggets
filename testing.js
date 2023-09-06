
const arr = [1,2,3,4,5]
let newArr = arr.pop() // removes last element in the array. O(1): constant time complexity.
// .push() adds an elem to the end of the array.

let otherArr = arr.unshift(0) // adds an elem to the start of the array. O(N): linear time complexity.
// .shift() removes an elem from the start of the array.


console.log(arr);