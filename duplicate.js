var id = [3, 6, 2, 7, 3, 2, 8, 1,9, 11,56];
console.log(id);
console.log(id.length);

var unique = [];
for(var i=0; i < id.length; i++){
    var element = id[i];
    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element);
    }
}
console.log(unique);
console.log(unique.length);


// function add(a, b){
//     return a + b;
// }
// console.log(add("adam" + "eve"));