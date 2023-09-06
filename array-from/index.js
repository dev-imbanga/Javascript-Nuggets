

// const udemy = 'udemy'
// console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
// console.log(text); //gives us a nodeList

//the  .from converts the nodeList into an array and
// with that you can call any method on the array.


// const newText = Array.from(text)
// console.log(newText); 


//example:
const newText = Array.from(text).find((item)=>item.textContent === 'Alien')
// console.log(newText)

const items = Array.from({length:120},(_, index)=>{
    return index
})
console.log(items);

const itemsPerPage = 14
const pages = Math.ceil(items.length/itemsPerPage)
console.log(pages);
