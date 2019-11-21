# Programming task:
 - please use JavaScript
 - put code online as a snippet, git repository, gist, etc 
 - send a link to your code.

## Create a function that returns the minimum and maximum numbers from an array of numbers , in that order.

   `minMax([1, 2, 3, 4, 5]) ➞ [1, 5]`
   `minMax([3445565, 2]) ➞ [2, 3445565]`
   `minMax([1]) ➞ [1, 1]`

## Create a function that checks if the given string matches the requirements.

   Must only contain numbers [0-9]
   Must not contain any spaces.
   Must not be greater than 5 digits in length.

   `isValid("69001") ➞ true`
   `isValid("321a7") ➞ false`
   `isValid("821 45") ➞ false`
   `isValid("898898") ➞ false`

## Create a function that converts an object into an array, where each element represents a key-value pair.

   `toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]`
   `toArray({ dogs: 5, cats: 2 }) ➞ [["dogs", 5], ["cats", 2]]`
   `toArray({}) ➞ []`

## Create a function that returns an array of objects from all "prerequisites" keys

   `INPUT:
   json = [{"id":1,"name":"accommodation","prerequisites":[{"id":1,"name":"Apartment/Flat"},{"id":2,"name":"House"}]},{"id":2,"name":"vehicle","prerequisites":[{"id":3,"name":"Boat"},{"id":4,"name":"Truck"}]}]`

   `OUTPUT:
   prerequisitesArray = [{"id":1,"name":"Apartment/Flat"},{"id":2,"name":"House"},{"id":3,"name":"Boat"},{"id":4,"name":"Truck"}]`