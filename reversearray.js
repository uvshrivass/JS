// Program to Reverse array elements  without using built in function, with using temp array.

array3 = [1,2,3,4,5,6];
temp1 = [];
var len1 = array3.length;
var len = array3.length;

function reverse2(){
    for (i=0;i<len1;i++){
        temp1[i]=array3[len-1]
        len = len - 1;
    }
console.log(temp1);