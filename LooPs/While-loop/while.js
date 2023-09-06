
// syntax

// while(condition)
//      statement

// example:
let i = 0;
let j = 0;

while(i < 4){
   i++                
   j+=i
}
// 1st pass i = 1  j =1
// 2nd pass i = 2  j =3
// 3rd pass i = 3  j =6
// 4th pass i = 4  j =10 .....

console.log(i);
console.log(j);

// the diffrence between a for loop and a while loop is that
// a for loop is used when the No of iterations is known and 
// a while loop is used when No of iterations is unkown.