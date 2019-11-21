// c) Create a function that converts an object into an array, where each element represents a key-value pair.

//    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//    toArray({ dogs: 5, cats: 2 }) ➞ [["dogs", 5], ["cats", 2]]
//    toArray({}) ➞ []

const toArray = (obj) => {
    let arr = [];
    return new Promise((resolve) => {
        Object.keys(obj).forEach((e) => {
            arr.push([`${e}`, eval(`obj.${e}`)])
        })
        return resolve(arr);
    })
}

(async () => {
    let a = await toArray({ a: 1, b: 2 })
    console.log(a);
    a = await toArray({ dogs: 5, cats: 2 })
    console.log(a);
    a = await toArray({})
    console.log(a);
})();
