//Optional Chaining.



const people = [
    {
        name:'bob',
        location: {street:'123 main str',
        timezone:{offset:'+7:00'}},
    },
    {
        name:'peter',
        location: {street:'123 pine str'}
    },
    {
        name:'susan',
        location: {street:'123 Apple str',
        timezone: {offset:'+9:00'}},
    },
]

people.forEach((person)=>{
    // console.log(person.name.location.timezone); // application fails

    console.log(person.name?.location?.timezone?.offset || 'not set');
})
