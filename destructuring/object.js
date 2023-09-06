//Object destructuring.

const bob = {
    first:'bob',
    second:'the builder',
    city:'Nairobi',
    siblings:{
        sister: 'jane',
        brother: 'joseph',
    }
};

// const firstName = bob.first;
// console.log(firstName);

const{first,second,city, siblings:{brother}}=bob
console.log(first,second,city, brother);

