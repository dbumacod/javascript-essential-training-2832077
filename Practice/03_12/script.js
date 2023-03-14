/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import FBasket from "./FBasket.js";
import Fruit from "./Fruit.js";

const saturdayBP = new Backpack (
    "Saturday Backpack",
    300,
    "green",
    4,
    21,
    19,
    true
);

const mysteryFruit = new Fruit(
    "Banana",
    "yellow",
    13,
    1253
);

const myBasket = new FBasket (
    "Dhoby's Fruit Basket",
    ["kiwi","apples","grapes"],
    {
        color: "brown",
        shape: "circle",
        size: "medium",
        weight: 9000
    },
    "Dhobyanna",
    24
);


console.log(saturdayBP.lidOpen);
saturdayBP.toggleLid(false);
console.log(saturdayBP.lidOpen);

console.log(mysteryFruit.weight);
mysteryFruit.setWeight(500);
console.log(mysteryFruit.weight);

console.log(myBasket.components);
myBasket.addFruit("tomatos");
console.log(myBasket.components);