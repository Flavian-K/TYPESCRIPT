// Created Vehicle interface
interface Vehicle {
	make: string; // Car brand
	model: string; // Car model
	year: number; // make year
	start(): void; // Function to start the car
}

// Created Car class that implements Vehicle
class Car implements Vehicle {
	make: string; // Car brand
	model: string; // Car model
	year: number; // make year

	// Constructor to set up car properties
	constructor(make: string, model: string, year: number) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	// Added start method to show a message
	start(): void {
		console.log(
			`Car engine started: ${this.make} ${this.model} (${this.year})`
		);
	}
}

// Created a Car object
const myCar = new Car("Tesla", "Model S", 2023);

// Called the start method for testing
myCar.start(); // Output: Car engine started: Tesla Model S (2023)
