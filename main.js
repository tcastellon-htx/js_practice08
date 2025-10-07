////////////////////
// 1) Vehicle class
////////////////////
class Vehicle {
    constructor() {
        this.wheels = 4;
    }

    rolling() {
        return `Rolling down the highway on ${this.wheels} wheels.`;
    }
}

const myRide = new Vehicle();
console.log(myRide.rolling()); // Test Vehicle

////////////////////
// 2) Car subclass
////////////////////
class Car extends Vehicle {
    constructor(carDoors) {
        super();
        this.doors = carDoors;
    }

    doorsAndWheels() {
        return `My car has ${this.doors} doors and ${this.wheels} wheels.`;
    }
}

const myCruiser = new Car(4);
console.log(myCruiser.doorsAndWheels()); // Test Car

////////////////////
// 3) Pie class
////////////////////
class Pie {
    constructor(pieFlavor) {
        this.flavor = pieFlavor;
        this.slices = 8;
    }

    getSlices() {
        return this.slices;
    }

    setSlices(newSlices) {
        this.slices = newSlices;
    }
}

const myDessert = new Pie("apple");
console.log(`Flavor: ${myDessert.flavor}, Slices: ${myDessert.getSlices()}`); // Test Pie
myDessert.setSlices(6);
console.log(`Updated slices: ${myDessert.getSlices()}`); // Test setter

////////////////////
// 4) Ice Cream Factory Function
////////////////////
function iceCreamFactory(iceCreamFlavor) {
    let flavor = iceCreamFlavor; // private

    return {
        cone: "waffle",
        serve() {
            return `Here's your ${flavor} ice cream in a ${this.cone} cone.`;
        }
    };
}

const myScoop = iceCreamFactory("chocolate");
console.log(myScoop.serve()); // Test Factory Function

////////////////////
// 5) Literal object and JSON conversion
////////////////////
const webDev = {
    foundation: "html",
    design: "css",
    logic: "javascript",
    build() {
        return "building...";
    }
};

const sendJSON = JSON.stringify(webDev);
console.log("JSON string:", sendJSON); // Test JSON conversion

const receiveJSON = JSON.parse(sendJSON);
console.log("Converted back to object:", receiveJSON); // Test parsing
