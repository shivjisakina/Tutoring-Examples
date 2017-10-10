var express = require("express");
var mysql = require("mysql");
var app = express();
var port = 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

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

var codingLanguages = [
    {
        Name: "JavaScript",
        Type: "Front-End",
        enjoy: true
    },
    {
        Name: "CSS",
        Type: "Front-End",
        enjoy: false

    },
    {
        Name: "Node.js",
        Type: "Back-End",
        enjoy: true
    }
]



app.get("/codinglanguages", function (req, res) {
    res.render('languages.handlebars', {languages: codingLanguages, foodObject: food})
})

// Initiate the listener.
app.listen(port, function() {
    console.log('EXPRESS APP LISTENING on %d', port);
});

