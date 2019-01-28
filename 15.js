// Program to swap nibbles in a byte.
var a = 100;
var bin_a = a.toString(2);

console.log(bin_a);


var temp1 = a;
var temp2 = temp1<<4;
var temp3 = a;
var temp4 = a>>4;
var temp5 = temp2|temp4;

var bin_b = temp5.toString(2);

console.log(bin_b)