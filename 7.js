//Swapping two arrays of equal length.

var array1 = [1,2,3,4];
var array2 = [5,6,7,8];
var array3 = [];

for (i=0; i<array1.length; i++){
    array3[i] = array1[i];
    array1[i] = array2[i];
    array2[i] = array3[i];
    
}

console.log(array1,array2)