const input = require('readline-sync');

//Class constructor
class Ride {
    static allRides = [];

    constructor(name, popularity, waitTime = 30) {
        this.name = name;
        this.popularity = popularity;
        this.waitTime = waitTime;
        Ride.allRides.push(this);
    }

    rideDescription() {
        console.log(`${this.name} has a popularity score of ${this.popularity}. Its wait time is ${this.waitTime} minutes.`);
    }
}

//Ride instantiations
const piratesOfTheCaribbean = new Ride('Pirates of the Caribbean', 10, 60);
const hauntedMansion = new Ride('Haunted Mansion', 10, 50);
const jungleCruise = new Ride('Jungle Cruise', 9);
const spaceMountain = new Ride('Space Mountain', 10, 65);
const itsASmallWorld = new Ride(`It's a Small World`, 5, 15);

//User input
visitTime = input.question('How many hours will you visit? ');
let visitTimeInMinutes = (Number(visitTime) * 60);

console.log(`You can ride ${piratesOfTheCaribbean.name} this many times: ${visitTimeInMinutes/piratesOfTheCaribbean.waitTime}`)