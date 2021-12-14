function groupBy(collection, it) {
    return collection.reduce((obj, item) => {
        let index = (typeof it === "function") ? it(item) : item[it];
        return {
            ...obj,
            [index]: [...(obj[index] || []), item]
        }
    }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{
    age: 23
}, {
    age: 24
}], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }


/*
index : 1ra iter: 23, 2da iter: 24


iteracion #1
index | obj             |     item      | 
23     {23:[{age:23}]}     { age: 23 }

index | obj                                |    item    |  
24     {23:[{age:23}], 24:[{ age: 24 }]}      { age: 24 }

*/