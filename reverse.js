function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Allien Bhai Brothers"
var forAlien = reverseString(statement);
console.log(forAlien);