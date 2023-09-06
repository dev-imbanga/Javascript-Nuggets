//splice
//the splice method takes arguments for the index of where to start removing items,
//number of items to remove and what to replace(optional);
//the splice method mutates the array.

// example 1
let array = [1,2,3,4,5,6]
const newArray = array.splice(3,2);
console.log(newArray);
console.log(array);

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1, 'Nairobi');
console.log(cities);
