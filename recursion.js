//iterative
function factorial(num){
    var fact = 1;
    for(var i=1; i<=num; i++){
        fact=fact*i;
    }
    return fact;
}
var result = factorial(6);
console.log('result', result);

//recursive
function factorialRecursive(numb){
    if(numb == 0){
        return 1;
    }
    else{
        return numb * factorialRecursive(numb - 1);
    }
}
var result2 = factorialRecursive(5);
console.log(result2);