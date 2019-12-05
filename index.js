let a = (str, i) => {
    let arr = str.split("");
    let retarr = [];
    if (i == 1) {
        for (i = 0; i < arr.length; i++ , i++) {
            retarr.push(arr[i]);
        }   
    }
    else {
        for (i = 1; i < arr.length; i++ , i++) {
            retarr.push(arr[i]);
        }
    }
    return retarr
}

console.log(a('TRACXN', 0))
console.log(a('TRACXN', 1))