// console.log("hello world");

var object = {
    name: "Josh",
    college: "UCF"
}

for (var key in object) {
    var value = object[key];
    // console.log(key, value)

    if (object.hasOwnProperty(key)) {
        console.log(key, object, value)
    }

}

/*if (buz.hasOwnProperty(name)) {
 console.log('this is fog (' +
 name + ') for sure. Value: ' + buz[name]);
 }*/







