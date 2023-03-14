class FBasket {
    constructor (
        fname,
        components,
        basket,
        owner,
        ownerAge,
    ) {
        this.fname = fname;
        this.components = components;
        this.basket = basket;
        this.owner = owner;
        this.ownerAge = ownerAge;
    }
    addFruit(newFruit) {
        this.components.push(newFruit)
    }
}

export default FBasket