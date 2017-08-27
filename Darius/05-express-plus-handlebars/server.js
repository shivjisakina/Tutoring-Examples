var express = require("express");
var mysql = require("mysql");
var app = express();
var port = 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var animals = [
    {
        animalType: "dog",
        animalName: "Dorian Gray",
        pet: true,
        cute: true,
        fierceness: 4
    }, {
        animalType: "cat",
        pet: true,
        cute: false,
        fierceness: 10
    }, {
        animalType: "giraffe",
        pet: false,
        cute: true,
        fierceness: 4
    }, {
        animalType: "zebra",
        pet: false,
        cute: true,
        fierceness: 8
    }, {
        animalType: "lion",
        pet: false,
        cute: false,
        fierceness: 10
    }
];

var food = [
    {
      breakfast: "eggs",
      lunch: "sandwich",
      dinner: "steak",
      enjoy: true
    },
    {
      breakfast: "cereal",
      lunch: "soup",
      dinner: "pasta",
      enjoy: false

    },
    {
      breakfast: "fruit",
      lunch: "burger",
      dinner: "salad",
      enjoy: true

    }
]



app.get("/", function(req, res) {
    // Handlebars requires an object to be sent to the index.handlebars file.
    // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
    res.render('index.handlebars', {animalList: animals});
});

app.get("/dog", function (req, res) {
    res.render('dog.handlebars')
})

app.get("/food", function (req, res) {
    res.render('food.handlebars', {foodList: food})
})

app.get("/activities", function (req, res) {
    res.render('activities.handlebars')
})

// Initiate the listener.
app.listen(port, function() {
    console.log('EXPRESS APP LISTENING on %d', port);
});

