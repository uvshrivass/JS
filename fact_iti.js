// Program to find out factorial of a number using iterative method.

function fact(num){
    
    var fact_i = 1;

for (i = 1; i<=num; i++){
    fact_i = fact_i * i;
}
    console.log(fact_i)

}

fact(5)