// Program to swap all odd and even bits.
// Given an unsigned integer, swap all odd bits with even bits. 
// For example, if the given number is 23 (00010111), it should be converted to 43 (00101011). 
// Every even position bit is swapped with adjacent bit on right side 
// (even position bits are highlighted in binary representation of 23), and every odd position bit is swapped with adjacent on left side.

function swapbits(x){

    var eb = x & 0xAAAAAAAA;
    var ob = x & 0x55555555;
    var ans;
    
    eb >>= 1;
    ob <<= 1;

    ans = eb | ob;

    console.log(ans);

}

swapbits(23);