// Program to check whether a charater is vowel or consonant.

var vowel = ["a","e","i","o","u", "A", "E", "I", "O", "U"];
var char = "o";

for (i=0; i<vowel.length; i++){
  
  
    if (vowel[i] == char){
       result = "The character is vowel."
       break
    }
    else {
        result = "The character is consonant."
    } 
}
console.log(result)
