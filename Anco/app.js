console.log("hello world");

// 9-12-2017

var Name = function (first, last) {
    console.log(this)
    this.firstname = first;
    this.lastname = last
}

var Sakina = new Name("sakina", "shivji")

var Anco = new Name("Anco", "Chien", "fjdskal")

console.log(Sakina, Anco)

// Mongoose

var mongoose = require('mongoose');

//mongoose.connect(dbconnectstring, { useMongoClient: true });

var db =
    process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/Anco';

mongoose.connect(db, function(err,res){
    if(err){
        console.log("Error connection to: " + db + '. ' + err);
    } else {
        console.log("Succeeded connecting to: " + db);
    }
});

var Schema = mongoose.Schema;


// Creating Model
var personSchema = new Schema({

    // Setting object values
    name: {
        // Making sure first and last are always a string
        first: String,
        last: String
    },

    favFood: {
        type: String
    }

});

// Creating the document inside the DB called 'Person'
var Person = mongoose.model('Person', personSchema);

// Using Schema to add axl's name
var axl = new Person({
    name: {
        first: 'Axl',
        last: 'Rose'
    }
});

// Using Schema to add anco's name
var anco = new Person({
    name: {
        first: "Anco",
        last: "Chien"
    },
    favFood: "pasta"
});

/*anco.save(function (err, doc) {
    if (err) {
        res.send(err)
    }
    else {
        console.log(doc)
    }
})*/

anco.save()
axl.save()








