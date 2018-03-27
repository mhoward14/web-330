var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 6.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 6.2
 27 March 2018

 */

 // start program

var person = {
    firstName: "Matthew",
    lastName: "Howard"
};

console.log(person.firstName + " " + person.lastName);