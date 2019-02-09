// Program to represent a decimal into 8 bit binary system.

var deci = 256;
var bin = deci.toString(2);

if (deci < 256 && bin.length<=8){
    var noofzero = 8 - bin.length;
    var temp = ""
    for (i = 0; i<noofzero; i++){
        temp = temp + 0;
    }
    bin = temp+bin;
    console.log(bin);
}
else{
    console.log(bin);
    console.log("To get an 8 bit binary, please enter a decimal less than 256.");
}



