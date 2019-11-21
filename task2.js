// b) Create a function that checks if the given string matches the requirements.

//    Must only contain numbers [0-9]
//    Must not contain any spaces.
//    Must not be greater than 5 digits in length.

//    isValid("69001") ➞ true
//    isValid("321a7") ➞ false
//    isValid("821 45") ➞ false
//    isValid("898898") ➞ false

const isValid = (text) => {
    return (/^\d{0,5}$/.test(`${text}`));
}

console.log(isValid("69001"))
console.log(isValid("321a7"));
console.log(isValid("821 45"))
console.log(isValid("898898"))