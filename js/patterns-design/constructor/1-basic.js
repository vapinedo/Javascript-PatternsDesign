
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = () => {
        const message = `${this.model} has done ${this.miles} miles.`;
        return message;
    };
}

// Usage
var civiv = new Car("Honda Civiv", 2009, 20000);
console.log(civiv);
console.log(civiv.toString());