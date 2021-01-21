var speech = "I am a good  person. I don't snore  at night";
console.log(speech.length);
console.log(speech[2]);

var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);

// Count how many times you have the letter a in a string.
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count1 = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == 'a'){
        count1++;
    }
}
console.log(count1);