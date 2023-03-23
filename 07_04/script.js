/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */
var myVar = "tite"

let myArray = ["cellphone", "alcohol", "pamphlet", myVar]
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray.unshift(myVar)
console.log(myArray)

myArray.sort()
console.log(myArray)


var findItem = "tite"
let foundItem = myArray.find(function(item) {
    return item == findItem
})

console.log("foundItem:", foundItem);

let foundItemIndex = myArray.findIndex(function(item) {
    return item == findItem
})

console.log("foundItemIndex:", foundItemIndex);

// const myArray2 = myArray.splice(foundItemIndex,1)
myArray.splice(foundItemIndex,1)
console.log("finalArray:", myArray);
// console.log("finalArray:", myArray2);





// let longItems = backpackContents.find(function (item) {
//     if (item.length >= 5) {
//       return item;
//     }
//   });
//   console.log("longItems:", longItems);