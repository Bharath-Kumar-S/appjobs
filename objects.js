const dog = {
    name:'Pug'
}

const animal = Object.create(dog);

console.log(animal.name);