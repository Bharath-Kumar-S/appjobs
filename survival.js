const a = [4, 7, 9, 2, 5];

console.log(a[2]);

let b;

console.log(b);

console.log(null === undefined);

console.log(typeof 5);
console.log(typeof {});
console.log(typeof [5, 6]);
console.log(typeof 'Bharath');
console.log(typeof function () { });

const x = {};
x['name'] = "Bharath";
console.log(x.name);

console.log("23" === 23)

let name = x.name === "Bharath" ? true : false;

console.log(name);

try {
    throw new error;
    console.log(`works`);
} catch (error) {
    console.log(`fails`);
} finally {
    console.log('data');
}

//#####################################################


const local = () => {
    u = 5; //if no var,let,const are mentioned then it is glabal.
    r = 10;
}
console.log(u);

// console.log(r); r is not defined



