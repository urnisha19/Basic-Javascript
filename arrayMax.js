var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}
console.log("Highest value is: ",max);