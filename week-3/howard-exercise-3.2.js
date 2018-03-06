var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 3.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 3.2
 5 March 2018

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) { 
    this.username = properties.username || 'mhoward07'; 
    this.password = properties.password || 'M4nCun!Um%Un1tuM';
    this.server = properties.server || 'localhost:0707';
    this.version = properties.version || 'v3.0';
}

function Informix(properties){
    this.username = properties.username ||'mhoward07';
    this.password = properties.password || 'M4nCun!Um%€x%RußrUm';
    this.server = properties.server || 'localhost:1414';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql; 
    }

    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "mhoward07",
    password: "M4nCun!Um%Un1tuM",
    server: "localhost0707",
    version: "v3.0"
});

var informixFactory = new DatabaseFactory();
var Informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "mhoward07",
    password: "M4nCun!Um%€x%RußrUm",
    server: "localhost:1414"
});

console.log(oracle);
console.log(Informix);
// end program
 

