var num = 2.12458;
var result1 = Math.floor(num);
console.log(result1);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);

var diceZeroToOne = Math.random();
console.log(diceZeroToOne);

var diceOneToTen = Math.random() * 10;
console.log(diceOneToTen);

for (var i = 0; i < 6; i++) {
    var diceOneToSix = Math.random() * 6;
    console.log(diceOneToSix);
    var output = Math.round(diceOneToTen);
    console.log(output);
}



