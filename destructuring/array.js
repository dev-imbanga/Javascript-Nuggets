//array destructuring.

const foo = [1,2,,4];
const[red,yellow,green]=foo;

console.log(red); // 1
console.log(green); // undefined

//swaps.
let a = 1;
let b = 3;

[a,b]=[b,a]
console.log(a); //3
console.log(b); //1

//parsing an array returned from a function
function f(){
    return [1,2];
}
const[brother,sister]=f()
console.log(brother);
console.log(sister);

