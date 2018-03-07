var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 3.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 3.3
 6 March 2018

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() { 
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase; 
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    } 
})();

function DatabaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);

}

DatabaseSingletonTest();

// end program