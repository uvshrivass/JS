// Program to find the binary of a decimal.

function binary(x){
    if (x == 0){
        return;
    }
  while (x > 1){
      array=[]
      array.push(x%2)
      binary(parseInt(x/2))
      
  }
  console.log(array)
}



binary(64)