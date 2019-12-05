let a = [100, 180, 260, 310, 40, 535, 695];
let minimum = Math.min(...a);
let minindex = a.indexOf(minimum);
let newarray = a.slice(minindex);
let maximum = Math.max(...newarray);
let maxindex = a.indexOf(maximum)

console.log(`Buy on - Day ${minindex + 1} - Sell on - ${maxindex + 1} - Profit = ${maximum - minimum}`)