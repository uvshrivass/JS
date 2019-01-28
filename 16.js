// Program to convert decimal into 8 bits binary.
function c2b(dec) {
    var bits = [];
    var dividend = dec;
    var rem = 0;
    while (dividend >= 2) {
        rem = dividend % 2;
        bits.push(rem);
        dividend = (dividend - rem) / 2;
    }
    bits.push(dividend);
    bits.reverse();
    len= bits.length();

    return bits.join("");
}



console.log(c2b(25))