// Program to find the binary of a decimal.

function binary(x){
    if (x == 0){
        return;
    }
  console.log(x%2)
  binary(parseInt(x/2))
}



binary(64)