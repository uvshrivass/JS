// Program to remove duplicate numbers from an array in javascript without Set constructor.

array5 = [1,2,3,4,5,5,4,3,2,1]
array6 = [];

function dup(){
    
    for (i=0;i<array5.length; i++){
         temp3 = array5[i];
        if (array6.indexOf(temp3)==-1){
            array6.push(temp3)

        }
}
console.log(array6);
}
dup();