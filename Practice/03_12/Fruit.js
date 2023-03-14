class Fruit {
    constructor (
        fname,
        color,
        quantity,
        weight
    ) {
        this.fname = fname,
        this.color = color,
        this.quantity = quantity,
        this.weight = weight
    }
    setWeight(w) {
        this.weight = w;
    }
}

export default Fruit;