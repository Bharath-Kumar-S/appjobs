// Two elements whose sum is closest to zero
// Question: An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.

// For the below array, program should print -80 and 85.

const minAbsSumPair = (arr) => {
    let revarr = [];
    arr.forEach((element, index) => {
        for (let i = index + 1; i < arr.length; i++) {
            revarr.push({
                number: Math.abs(element + arr[i]),
                index: [index, i]
            })
        }
    });
    let sort = revarr.map((e) => {
        return e.number;
    })
    let least = Math.min(...sort);
    let pair = revarr.find((e) => {
        if (e.number == least) {
            return e;
        }
    })
    console.log(`Least number is ${pair.number} and numbers are ${arr[pair.index[0]]} and ${arr[pair.index[1]]}`);
}


let arr = [1, 60, -10, 70, -80, 85];
minAbsSumPair(arr); 