var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 1.4");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 1.4
 21 February 2018

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
function Car(model)
{
    this.model = model;
}
Car.prototype.start = function()
{
    console.log("Car added to the racetrack");
}

function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function()
{
    console.log("Truck added to the racetrack");
}

function Jeep (model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function()
{
    console.log("Jeep added to the racetrack");
}

var racetrack = [];

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

var vanquishZagato = new Car("vanquishZagato");
var fordRaptor = new Truck("Raptor", "2018");
var trackHawk = new Jeep("trackHawk", "2018", "Ivory")

console.log("");

driveIt(vanquishZagato);
driveIt(fordRaptor);
driveIt(trackHawk);

console.log('\n-- The following vehicles have been added to the racetrack --');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program