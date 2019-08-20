class Alligator {
    constructor(
        type = '',
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.id = 0,
            this.type = type;
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}
console.log(Alligator)
export default Alligator;
