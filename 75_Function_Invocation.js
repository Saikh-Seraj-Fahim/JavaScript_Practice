// The code inside a JavaScript function will execute when "something" invokes it.

// Invoking a JavaScript Function:
// The code inside a function is not executed when the function is defined.
// The code inside a function is executed when the function is invoked.
// It is common to use the term "call a function" instead of "invoke a function".
// It is also common to say "call upon a function", "start a function", or "execute a 
// function".
// In this tutorial, we will use invoke, because a JavaScript function can be invoked 
// without being called.

// Invoking a Function as a Function:

// function myFunction(a, b) {
//     return a * b;
// }
// console.log(myFunction(10, 2));
// Output: 20

// The function above does not belong to any object. But in JavaScript there is always 
// a default global object.
// In HTML the default global object is the HTML page itself, so the function above 
// "belongs" to the HTML page.
// In a browser the page object is the browser window. The function above automatically 
// becomes a window function.

// Amra jokhon kono HTML file run kori browser e, browser er sei HTML page 1 ta 
// window object. jekono jinis sei global window object er under e. tar mane amra jei 
// function gula likhi segulao global window object er under e. Se jonno 
// window.myFunction() likhleo upor er code same output dibe. tobe window object ta 
// sudhu browser ei run kore. Node JS e run kore na.


// Note:
// This is a common way to invoke a JavaScript function, but not a very good practice.
// Global variables, methods, or functions can easily create name conflicts and bugs in 
// the global object.

// myFunction() and window.myFunction() is the same function:

// function myFunction(a, b) {
//     return a * b;
// }
// window.myFunction(10, 2); 

// The above code will run in HTML file. See the HTML file.

// What is this?
// In JavaScript, the this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

function a() {
    console.log(this);
}
a();

// Output:
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

// Jokhon kono function er moddhe this keyword use kora hoi,tokhon sei function ke own
// kore jei object this take mean kore. jekono function window global object er under
// e thake. tai upor er code e this global object ke mean koreche.

// const x = {
//     a: function () {
//         console.log(this);
//     }
// };
// x.a();
// Output: { a: [Function: a] }

// upor er code e function ta 1 ta object er under e ache. tai this ei khetre sei
// object ke return koreche.

// The Global Object:
// When a function is called without an owner object, the value of this becomes the
// global object.
// In a web browser the global object is the browser window.
// This example returns the window object as the value of this.

// function myFunction() {
//     return this;
// }
// let x = myFunction(); // x will be the window object
// console.log(x);
// Output: Object [global]

// Invoking a function as a global function, causes the value of this to be the
// global object.Using the window object as a variable can easily crash your program.

// Invoking a Function as a Method:
// In JavaScript you can define functions as object methods.
// The following example creates an object (myObject), with two properties (firstName
// and lastName), and a method (fullName):

// const myObject = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());
// Output: John Doe

// In the example above, this refers to the myObject object.
// this.firstName means the firstName property of this.
// Same as:
// this.firstName means the firstName property of myObject.

// The fullName method is a function. The function belongs to the object. myObject is
// the owner of the function.
// The thing called this, is the object that "owns" the JavaScript code. In this case
// the value of this is myObject.
// Test it! Change the fullName method to return the value of this:

// const myObject = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this;
//     }
// }
// console.log(myObject.fullName());
// Output: { firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }

// upor er code e function ta 1 ta object er under e ache. tai this ei khetre sei
// object ke return koreche.

// Invoking a function as an object method, causes the value of this to be the object
// itself.

// Invoking a Function with the Constructor:
// If a function invocation is preceded with the new keyword, it is a constructor
// invocation.
// It looks like you create a new function, but since JavaScript functions are objects
// you actually create a new object:


// function myFunction(arg1, arg2) { // This is a function constructor:
//     this.firstName = arg1;
//     this.lastName = arg2;
// }
// const myObj = new myFunction("John", "Doe"); // This creates a new object
// console.log(myObj.firstName);
// Output: John

// A constructor invocation creates a new object. The new object inherits the
// properties and methods from its constructor.

// The this keyword in the constructor does not have a value.
// The value of this will be the new object created when the function is invoked.

