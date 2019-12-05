// Given a sorted array and a number x, find the pair in array whose sum is closest to x
// Given a sorted array and a number x, find a pair in array whose sum is closest to x.
// Examples:

// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
// Output: 22 and 30

// Input: arr[] = {1, 3, 4, 7, 10}, x = 15
// Output: 4 and 10
// A simple solution is to consider every pair and keep track of closest pair (absolute difference between pair sum and x is minimum). Finally print the closest pair. Time complexity of this solution is O(n2)

const printClosest = (arr, number) => {
    let max = Number.MAX_SAFE_INTEGER;
    let arr1 = [];
    arr.forEach((element, index) => {
        for (let i = index + 1; i < arr.length - 1; i++) {
            arr1.push({ sum: element + arr[i], index: [index, i] })
        }
    });
    console.log(arr1)
    let a = arr1.map((e) => {
        return e.sum;
    })
    console.log(a)

}

printClosest([10, 22, 28, 29, 30, 40], 54);