var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 2.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 2.2
 26 February 2018

 */
 //start program 

 var person =
 {
    getAge: function ()
    {
        return this.age;
    }
 };

 var matthew = Object.create(person,{
     "age": 
     {
         "value": "35"
     },
     "fullname":
     {
         "value": "Matthew Howard"
     }
 });

 matthew.getAge();

 console.log("The person's full name is: '%s'", matthew.fullname);
 console.log("The person's age is '%s'", matthew.age);
 