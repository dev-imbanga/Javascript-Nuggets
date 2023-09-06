// returns a new array but with an exception: one can manipulate the array.
//if no match it returns an empty array.
const people = [
    {name:'bob', age:20, position:'builder'},
    {name:'susy', age:23, position:'nun'},
    {name:'faith', age:25, position:'athlete'}
]
const youngPeople = people.filter((person)=>{
    // if(person.age < 24){
    //     return person
    // }
    return person.age < 24;
});
// console.log(youngPeople);


const celibate = people.filter(people => people.position === 'nun')
// console.log(celibate);


//Find also iterates but returns a single instance, returns first match and if no match returns undefined.
// suitable for unique data ie apis that have ids
const fruits = ['apple', 'watermelon','banana'];
let sweetest = fruits.find(fruit=>fruit === 'apple');
console.log(sweetest);
