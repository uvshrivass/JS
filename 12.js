// Program to find if a character is an alphabet or not.

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var char = "s";

for (i = 0; i<alphabet.length; i++){
    if (alphabet[i] == char){
        result = "The character is an alphabet."
        break
    }
    else{
        result = "The character is not an alphabet."
    }
}

console.log(result)