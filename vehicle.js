// Created Car class that implements Vehicle
var Car = /** @class */ (function () {
    // Constructor to set up car properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Added start method to show a message
    Car.prototype.start = function () {
        console.log("Car engine started: ".concat(this.make, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Car;
}());
// Created a Car object
var myCar = new Car("Tesla", "Model S", 2023);
// Called the start method for testing
myCar.start(); // Output: Car engine started: Tesla Model S (2023)
