//The slice method returns a copy of certain elements of an array. 
//It can take two arguments, the first gives the index of where to begin the slice, 
//the second is the index for where to end the slice (and it's non-inclusive). 
//does not mutate the original array.


// ejemplo
// function foreCast(arr){
//     return arr.slice(2,4)
// }
// console.log(
//     foreCast(['cold','sunny','rainy','warm','storm','thunders'])
// );
// ['rainy', 'warm'] non inclusive of storm even though 4 ends at storm

//example two.

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
function sliceArray(anim, beginSlice, endSlice) {
  
return anim.slice(beginSlice, endSlice);

}
// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(inputAnim)

