//Spread Operator

const name = 'chebet';
const letters = [...name] // spreads out the letters!
console.log(letters);

let boys = ['john', 'peter', 'bob'];
let girls = ['susan','anna'];
let bestFriend = 'jose';

let friends = [boys,girls,bestFriend]; // separates them in diffrent arrays
let friendsTwo = [...boys,...girls,bestFriend];  // single array.

console.log(friends);
console.log(friendsTwo);


const person = {name:'john', job:'nurse'};
const newPerson = {...person, city:'chicago', name:'peter'};
console.log(person);
console.log(newPerson);

