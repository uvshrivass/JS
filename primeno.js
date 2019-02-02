// Program to find prime numbers between 1 - 100.

for (var i = 1; i <= 100; i++) {
    var a = false;
    for (var j = 2; j <= i; j++) {
       if (i%j==0 && j!==i) {
          a = true;
       }
    }
    if (a == false) {
       console.log(i);
    }
 }