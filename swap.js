var a = 5;
var b = 7;

var temp = a; //kekeping a in temp
a = b; //keeping b in a
b = temp; //keeping temp(a) in b
console.log("after swap: a=",a, "b=", b);

// swap without temp
var x = 5;
var y = 7;
console.log("before swap: x=",x, "y=", y);
x = x+y; //x = 5+7 = 12 so the  value of x is 12 now
y = x-y; //y = 12-7 = 5 so the value of y is 5 now
x = x-y; //x = 12-5 = 7 so the value of x is 7 now
console.log("after swap: x=",x, "y=", y);


// destructing(javascript special)
var p = 5;
var q = 7;
console.log("before swap: p=",p, "q=", q);
[p, q] = [q,p];
console.log("after swap: p=",p, "q=", q);
