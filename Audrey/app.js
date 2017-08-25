console.log("hello world");

// 8-23-2017

// Firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXZxw5v15pWB76agmGI9SsMraV3G43q28",
    authDomain: "audreys-awesome-project.firebaseapp.com",
    databaseURL: "https://audreys-awesome-project.firebaseio.com",
    projectId: "audreys-awesome-project",
    storageBucket: "",
    messagingSenderId: "904338134370"
};
firebase.initializeApp(config);

var db = firebase.database();

$(".CreateDB").on("click", function (event) {

    event.preventDefault();

    var foodDB = db.ref("FoodDatabase");

    foodDB.set({
        breakfast: "cereal",
        lunch: "salad",
        dinner: "chicken"
    })

});

// Firebase Auth

// Email/Password Auth

$(".signup").on("click", function (event) {

    event.preventDefault();

    // taking value of user input
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    // console logging
    console.log(email, password)

    // Taking firebase built in function and storing it in the user variable
    var user = firebase.auth().createUserWithEmailAndPassword(email, password);

    user
        .then(function (data) {

            // Parsing through data returned
            console.log(data.email);
            console.log(data.uid);

            // Naming our database "userDB"
            var userDB = db.ref("userDB");

            // Storing your information in a JSON object
            var userDBObject = {
                email: data.email,
                userID: data.uid
            }

            // Pushing JSON object into DB named "userDB"
            userDB.push(userDBObject)

        })

        // catching any errors
        .catch(function (error) {
            console.log(error.code);
            alert(error.message);
        });

    console.log("this was a click")

});

// Parameterssssss

var alerts = function (text) {

    var div = $("<div>").addClass("alert alert-success");
    var alertText = (text);
    var divClose = $("</div>");

    div.append(alertText, divClose);

    $("body").append(div)

}

alerts("alert1")
alerts("this is another alert")

var form = function (first, last) {

    var form = $("<form>");
    firstnameInput = $("<input>")
    firstname = $("<label>")
    firstname.text(first);

    var lastnameInput = $("<input>")
    lastname = $("<label>")
    lastname.text(last);

    var break1 = $("<br>")

    form.append(firstname, firstnameInput, break1, lastname, lastnameInput)

    $("body").append(form)

}

form("Firstname", "Lastname")
form("Address", "Social Security")

// Moment JS



