// a) Create a function that returns the minimum and maximum numbers from an array of numbers , in that order.

//    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//    minMax([3445565, 2]) ➞ [2, 3445565]
//    minMax([1]) ➞ [1, 1]

const minMax = (arr) => {
    if (arr.length == 1) {
        return [arr[0], arr[0]];
    } else {
        arr = arr.sort();
        return [arr[0], arr[arr.length - 1]];
    }
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([3445565, 2]))
console.log(minMax([1]))