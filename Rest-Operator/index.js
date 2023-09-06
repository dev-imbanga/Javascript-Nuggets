//Rest Operator

const fruits = ['apple', 'orange','lemon','banana'];
const[first,...rest] = fruits;
console.log(first,rest);

const employee = {name:'beatrice', nickname:'beeto', job:'manager'}
const{ name } =  employee;
console.log(name);


const getAverage = (name,...scores)=>{
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item)=>{return total += item},0)/scores.length
    console.log(average);
}

getAverage(employee.name, 80,90,80)