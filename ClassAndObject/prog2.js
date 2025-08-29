class Car {
    #fule;
    constructor(fule) {
        this.#fule = fule;
    }
    #burnFule() {
        this.#fule -= 1;
    }
    Start() {
        this.#burnFule();
        console.log("Car Start.");
        console.log(this.#fule);        
    }
};
let car = new Car(10);
car.Start();
console.log(car);