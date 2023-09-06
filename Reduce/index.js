//Reduce
//iterates, callback fn
// reduces to a single value : could be a number, array or object
//1st parameter ('acc') - total of all calculations
//2nd parameter ('curr') - current iteration/value

const numbers = [1,3,8,9];
const total = numbers.reduce((acc,curr)=> acc + curr)
// const total = numbers.reduce((a,b)=>a+b);
console.log(total);

const staff = [
    {name:'bob', age:25, position:'developer', salary:400},
     {name:'suzy', age:28, position:'nun', salary:200},
      {name:'anna', age:23, position:'teacher', salary:150},
]

// lets say we want the total salary
const totalSalary = staff.reduce((total, person)=>{
    total += person.salary
    return total
},0)
console.log(totalSalary);

//returning staff name and their salary.
const individualEarnings = staff.reduce((object,individual )=>{
    object[individual.name] = individual.salary;
    return object
},{})
console.log(individualEarnings);

