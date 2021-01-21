function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element
    }
    return sum;
}
var numbers = [45, 81, 63, 98, 56, 35, 23];
var result = getArraySum(numbers);
console.log("Sum is: ", result);

var total = getArraySum([45, 65, 78, 12]);
console.log("Sum is: ", total);

