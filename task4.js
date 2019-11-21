// d) Create a function that returns an array of objects from all "prerequisites" keys

//    INPUT:
//    json = [{"id":1,"name":"accommodation","prerequisites":[{"id":1,"name":"Apartment/Flat"},{"id":2,"name":"House"}]},{"id":2,"name":"vehicle","prerequisites":[{"id":3,"name":"Boat"},{"id":4,"name":"Truck"}]}]

//    OUTPUT:
//    prerequisitesArray = [{"id":1,"name":"Apartment/Flat"},{"id":2,"name":"House"},{"id":3,"name":"Boat"},{"id":4,"name":"Truck"}]


const prerequisitesArray = (arr) => {
    let arr1 = [];
    arr.forEach((e) => {
        e.prerequisites.forEach((f) => {
            arr1 = [...arr1, f];
        })
    })
    console.log(arr1)
}

prerequisitesArray([{ "id": 1, "name": "accommodation", "prerequisites": [{ "id": 1, "name": "Apartment/Flat" }, { "id": 2, "name": "House" }] }, { "id": 2, "name": "vehicle", "prerequisites": [{ "id": 3, "name": "Boat" }, { "id": 4, "name": "Truck" }] }]);