// Any javascript function using which object is created is called constructor function.

function Person(FirstName, LastName, Age) {
        this.firstName = FirstName || "unknown";
        this.lastName = LastName || "unknown";
        this.age = Age || 25;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
};

var person1 = new Person("Ujjwal","Shrivas",30);
console.log("Hello " + person1.getFullName() + " You are " + person1.age + " years old.");

// Use "Object.keys()" method to retrieve all the properties name for the specified object as a string array.

console.log(Object.keys(person1));

// Enumerate properties of person1
for(var prop in person1){
    console.log(prop);
  }
