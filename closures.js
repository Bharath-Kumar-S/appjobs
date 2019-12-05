function outer(){

    let counter = 0;
    const inner = () => {
        counter++;
        return counter
    }
    return inner;

}

const fun = outer();

console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());