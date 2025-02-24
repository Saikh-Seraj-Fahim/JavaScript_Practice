// Method Reuse:
// With the call() method, you can write a method that can be used on different objects.

// myFunction();
// new myFunction();
// myObject.myFunction();

// ei gula hocche Function Invocation.
// Normal function call hocche function invocation.ar built in .call() function diye 
// call korle seta hocche function call.

// All Functions are Methods:
// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global 
// object (see previous chapter).
// JavaScript e object er moddhe property hisebe kono function thakle sei function ke
// method bole. abar kono function jodi object er moddhe na o thake,tahole sei function
// by default global window object er under e thake. global object er under e thakar  
// jonno sei function o method. So, ei jonno sob function ke method bola hoi.

// The JavaScript call() Method:
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument 
// (parameter).
// With call(), an object can use a method belonging to another object.
// This example calls the fullName method of person, using it on person1:

// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));
// Output:
// John Doe
// Mary Doe


// The call() Method with Arguments:
// The call() method can accept arguments.

// const person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// console.log(person.fullName.call(person1, "Oslo", "Norway"));
// Output: John Doe, Oslo, Norway





