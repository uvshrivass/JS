// Program to add two (NxN) matrices.

var matrix_1 = [[3,4,6],[1,2,3]];
var matrix_2 = [[7,1,3],[4,8,2]];
var result = [[],[]];

for (i=0; i<matrix_1.length; i++){
    for (j=0; j<matrix_1[0].length; j++){
        result[i][j] = matrix_1[i][j] + matrix_2[i][j];
    }
   
}

console.log(result)