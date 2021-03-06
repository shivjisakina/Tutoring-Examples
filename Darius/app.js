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

console.log(John);
console.log(Sally);


var John = {
    firstname: "John",
    lastname: "Smith",
    healthPoints: 40,
    attackPoints: 120
}

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

var mongoose = require('mongoose');

var db =
    process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/Darius';

mongoose.connect(db, function(err,res){
    if(err){
        console.log("Error connection to: " + db + '. ' + err);
    } else {
        console.log("Succeeded connecting to: " + db);
    }
});

var Schema = mongoose.Schema;

// Schema / Filter
var PeopleSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    favoriteFood: String
})

// Initializing People variable as Schema
var People = mongoose.model("People", PeopleSchema);

// Passing data through PeopleSchema
var Darius = new People({
    name: {
        first: "Darius",
        last: "Rafei"
    }

})

var Sakina = new People({
    name: {
        first: "Sakina",
        last: "Shivji"
    },
    favoriteFood: "Chicken"
})

// Saving to MongoDB
Darius.save()
Sakina.save()








