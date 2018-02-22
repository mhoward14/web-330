var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 1.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 1.3
 21 February 2018

  -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function()
    {
        return this.price;
    }

    this.getModel = function()
    {
        return this.model;
    }

    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

var Pixel = new CellPhone ("Google", "Pixel 2", "White", "$649.99");
console.log(Pixel.getDetails());
