console.log("hello world");

// 8-26-2017

// Constructors

var characters = function (first, last, HP, attackPoints) {

    this.firstname = first;
    this.lastname = last;
    this.healthPoints = HP;
    this.attackPoints = attackPoints;

}

var John = new characters("John", "Smith", 40, 120);
var Sally = new characters("Sally", "Smith", 302, 382)

console.log(John)
console.log(Sally)


/*var John = {
    firstname: "John",
    lastname: "Smith",
    healthPoints: 40,
    attackPoints: 120
}*/

// Methods

var charactersMethod = function (first, last, HP, attackPoints) {

    this.firstname = first;
    this.lastname = last;
    this.healthPoints = HP;
    this.attackPoints = attackPoints;

    // Method is a function in a constructor
    this.fullname = function () {
        return this.firstname + this.lastname;
    }

};

var JohnMethod = new charactersMethod("John", "Smith", 40, 120)

console.log(JohnMethod.fullname());

// Express
// Handlebars

var express = require("express")

app.get("/home", function (req, res) {
    res.render()
})







