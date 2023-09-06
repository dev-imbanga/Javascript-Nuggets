// dot notation 

const house = {
    windows: 'made of glass and metal'
}
house.roof = 'made of iron sheets';
console.log(house);

//square bracket notation

let appState = 'loading';
appState = 'error';

let keyName = 'computer';
keyName = 'fruit'

const app = {
    [appState]: true
}
// lets say you want to add a value to the app object
app[keyName] = 'apple'
// Go create a variable
//the value of your variable becomes the key name
console.log(app);

// another example to dynamically update values

const state = {
    loading:true,
    name:'',
    job:''

}
function updateTheState(key, value){
    state[key] = value
}

updateTheState('name', 'imbanga')
updateTheState('job', 'blockchain developer')
updateTheState('loading', false)
updateTheState('products', [])  //add something new
console.log(state);

