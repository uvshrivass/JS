// Program to find power of a number using recursion.


function result (num, power) 
{
   if (power == 0) 
   {
    return 1;
    }
  else 
  {
    return num * result(num, power-1);
  }
}

console.log(result(2,6))