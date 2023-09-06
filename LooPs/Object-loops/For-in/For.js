// The for...in statement iterates over all enumerable string properties of an object 
// (ignoring properties keyed by symbols), including inherited enumerable properties.

// for in loops over the keys of an object, 
// while for of loops over the values of an iterable object like an array or a string


// syntax

// for(variable in object){
//     statement
// }

const object = {
    a : 1,
    b : 2,
    c : 3
}

for(property in object){
    console.log(`${property} : ${object[property]}`);
}
