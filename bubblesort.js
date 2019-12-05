const bubble = (arr) => {

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble([4, 7, 2, 9, 3]))