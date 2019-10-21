/* Explain the 4 principles for the "this" keyword below.


// Principle 1
* 1. When in the global scope, the value of 'this' will be the window/console Object. 
Code example for Window Binding */

function sayName(name) {
    console.log(this);
    return name;
}
sayName("D'Artagnan");


// Principle 2
/* 2. Let's say I have an Object with a property whose value is a function (this is called a method): 
whenever the function/method is called, the preceding dot (in other words, the object left of that dot)
is what 'this' refers to. In the example below, objectEmployee is the context for the 'this' keyword. 
Code example for Implicit Binding */

let objectEmployee = {
    name: "Alison",
    age: 39,
    location: "Cape Town",
    employer: "Amazon",
    showdata: function() {
        return `All the information about this employee: her name is ${this.name}, she is ${this.age} years old, located in ${this.location} and works at ${this.employer}.`;
    }
};

console.log(objectEmployee.showdata());

// Principle 3
/* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is 
created and returned by the constructor function. In other words, it is a function that creates an object for us. 
When we call it we have to use the new keyword.
// Code example for New Binding */

// this function is a Class Constructor 
function User(nameStr, emailStr, passwordStr) {
    // this creates a new {}
    this.name = nameStr;
    this.email = emailStr;
    this.password = passwordStr;
    this.saysHello = function() {
        return "Hello " + this.name + "!";
    }
}
// return this

let userMike = new User("Mike", "mikey@gmail.com", "34534");
console.log(userMike.saysHello());
console.log(userMike.name);

// Principle 4
/* 4. Whenever JavaScript’s call or apply method is used, 'this' is explicitly defined.
// Code example for Explicit Binding */

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak(); // Hello Newman
newman.speak(); // Hello Jerry

jerry.speak.call(newman); // Hello Jerry
newman.speak.apply(jerry); // Hello Newman