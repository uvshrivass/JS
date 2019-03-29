// Variable "this.getFullName" will act like a method of class "Person"


function Person (){
    this.firstname = "";
    this.lastname = "";
    this.getFullName = function(){
        return this.firstname + " " + this.lastname;
    }
}

var person1 = new Person();
person1.firstname = "Ujjwal";
person1.lastname = "Shrivas";

console.log("Hello " + person1.getFullName())