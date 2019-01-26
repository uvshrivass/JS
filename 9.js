//Program to find the largest among three.

var array = [3,8,2, 53];
var checker = array[0];

for (i=1; i<array.length; i++){
    if (array[i]>=checker){
        checker = array[i]
    }
}
console.log("The largest element is: ", checker)