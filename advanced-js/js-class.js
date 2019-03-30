// Following demonstrates how a function can be used like a class in JavaScript
// We can create an object of any function using "new" keyword
// "Person" is a constructor function or acts as a class and "person1" is its object
// Variable "this.firstname" & "this.lasttname" will act like properties

function Person (){
    this.firstname = "";
    this.lastname = "";
}

var person1 = new Person();
person1.firstname = "Ujjwal";
person1.lastname = "Shrivas";

console.log("Hello " + person1.firstname + " " + person1.lastname)