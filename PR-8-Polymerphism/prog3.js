class Car {
    Drive() {
        console.log("Car is driving.");
    }
};
class Bike {
    Drive() {
        console.log("Bike is driving.");
    }
};
class Boat {
    Drive() {
        console.log("Boat is sinking.");
    }

};
function startJourney(vehicle) {
    vehicle.Drive();
};
startJourney(new Car());
startJourney(new Bike());
startJourney(new Boat());