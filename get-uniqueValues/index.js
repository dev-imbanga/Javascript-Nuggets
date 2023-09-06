
const menu = [
    {
        name:'pancakes',
        category: 'breakfast',
    },
      {
        name:'Greenbeans',
        category: 'lunch',
    },
      {
        name:'smoothie',
        category: 'refreshment',
    },
      {
        name:'protein shake',
        category: 'gym',
    },
      {
        name:'ugali and eggs',
        category: 'dinner',
    }
]

//first youll map over them
//new Set - pick out the unique value that you want
// ['all',...new] - turn it back to an array

const allCategories = ['all', ...new Set(menu.map(item=>item.category))];
console.log(allCategories);