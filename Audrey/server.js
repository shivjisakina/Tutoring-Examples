console.log("hello")

var express = require('express')
var app = express()

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

app.get('/', function (req, audrey) {
    audrey.send('Hello World')
    console.log(req)
})

app.listen(3000)

//res.render -sending views file to page (UI)

// res.render(index.html)

//res.send
//res.redirect (Redirect to the specific express route)

//res.end