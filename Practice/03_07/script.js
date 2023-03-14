/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const fruit = {
    name: "banana",
    color: "yellow",
    quantity: 1,
    weight: 400,
    setWeight: function(W){
        this.weight = W;
        console.log("Weight Set to:", this.weight)
    }
}

const fruitBasket = {
    name: "Fruit Basket",
    components: ["Apples", "Bananas", "Kiwis"],
    basket: {
        color: "brown",
        shape: "circle",
        size: "medium",
        weight: 200
    },
    owner: "Dhoby",
    ownerAger: 12,
    addFruit: function(newFruit) {
        this.components.push(newFruit)
        console.log("Fruit successfulle added:", this.components)
    }
}

