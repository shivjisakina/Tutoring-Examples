$(".btn btn-primary").click(function() {
    console.log( "Handler for .click() called." );
});

$( "body" ).keyup(function() {
    console.log( "Handler for .keyup() called." );
});

setTimeout(function () {
    console.log("Its been 1 seconds")
}, 1000);

setTimeout(function () {
 console.log("10")
}, 10000);

setTimeout(function () {
    console.log("30")
}, 30000)

function countDown() {
    var countdown = 30;
    var int = setInterval(function () {
        countdown-- || clearInterval(int);  //if countdown is 0, then stop the interval
        $("body").html("Number: " + countdown);
    }, 1000);
}
countDown();

/*

var gameCountdown = 30;

function countdown() {
    gameCountdown--;
    console.log(gameCountdown)
}

var timer = setInterval(gameCountdown, 1000)*/
