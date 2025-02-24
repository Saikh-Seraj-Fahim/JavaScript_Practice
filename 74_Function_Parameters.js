// A JavaScript function does not perform any checking on parameter values(arguments).

// Function Parameters and Arguments:
// Earlier in this tutorial, you learned that functions can have parameters:

// function functionName(parameter1, parameter2, parameter3) {
//   // code to be executed
// }
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

// function a(x, y) {  // x,y are parameters
//     return x * y;
// }
// a(3,4); // 3,4 are arguments

// Parameter Rules:
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// Upor er code e x,y er kono data type nai.Tai argument hisebe je kono data type er 
// variable pathano jabe. a(3,4) er bodol e a("Sumit",4) o pathano jabe.
// Because javascript function argument er type check kore na.
// koi ta argument pathano holo setao check kore na.jamon a(2,6,3,9) pathaleo kono
// error dhorbe na.jodio 2 ta argument receive korar kotha but argument 4 ta pathaleo 
// kono error dhorbe na.

// function a(x, y) {
//     return x * y;
// }
// console.log(a(3, 4, 5, 8));
// Output: 12


// Default Parameters:
// If a function is called with missing arguments (less than declared), the missing
// values are set to undefined.
// Sometimes this is acceptable, but sometimes it is better to assign a default value to
// the parameter:

// function myFunction(x, y) {
//     if (y === undefined) {
//         y = 2;
//     }
//     return x * y;
// }
// console.log(myFunction(4));
// Output: 8

// Default Parameter Values
// ES6 allows function parameters to have default values.

// function myFunction(x, y = 10) {
//     return x + y;
// }
// console.log(myFunction(5));
// console.log(myFunction(5,7));
// Output:
// 15
// 12


// Function Rest Operator:

// Rest operator er symbol pura Spread operator er moto. But difference hocche 
// rest operator sudhu function er parameter ei use kora hoi.

// Jokhon kono function e onek gulo argument pathano hoi jamon nicher code e 8 ta 
// argument pathano hoyeche. Tahole ei khetre sei 8 ta argument receive korte parameter
// e 8 ta variable dorkar. But eto besi variable use kora muskil. Emon khetre rest
// operator use kora hoi. Rest operator sob argument gula ke receive kore array hisebe
// treat kore. 

// The rest operator (...) allows a function to treat an indefinite number of
// arguments as an array.

// function sum(...par) {
//     console.log(par);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// Output:
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]

// function sum(...par) {
//     let sum = 0;
//     for (let a of par)
//         sum = sum + a;
//     return sum;
// }
// let x = sum(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(x);
// Output: 36

// 18 - Rest Operator - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// function sum(a, b, ...par) {
//     console.log(a);
//     console.log(b);
//     console.log(par);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// Output:
// 1
// 2
// [ 3, 4, 5, 6, 7, 8 ]

// Rest operator function parameter list e sobar last e thakbe. First e anle error 
// dekhabe.

// function sum(...par, a, b) {
//     console.log(a);
//     console.log(b);
//     console.log(par);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// SyntaxError: Rest parameter must be last formal parameter
// function sum(...par, a, b) {
//     ^

// Upor er code gula te function parameter list e 1 ta rest operator use kora hoyeche.
// 1 tar besi rest operator use kora jabe na.


// The arguments Object:
// JavaScript functions have a built-in object called the arguments object.
// The arguments object contains an array of the arguments used when the function was
// called (invoked).

// function a(x, y) {
//     console.log(arguments);
// }
// a(3, 4, 5, 8);
// Output: [Arguments] { '0': 3, '1': 4, '2': 5, '3': 8 }

// function a() {
//     console.log(arguments);
// }
// a(3, 4, 5, 8);
// Output: [Arguments] { '0': 3, '1': 4, '2': 5, '3': 8 }

// This way you can simply use a function to find (for instance) the highest value in a
// list of numbers.

// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// let x = findMax(1, 123, 500, 115, 44, 88);
// console.log(x);
// Output: 500

// Or create a function to sum all input values:

// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// let x = sumAll(1, 123, 500, 115, 47, 88);
// console.log(x);
// Output: 874

// If a function is called with too many arguments (more than declared), these
// arguments can be reached using the arguments object.

// Arguments are Passed by Value:
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values,
// not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's
// original value.
// Changes to arguments are not visible (reflected) outside the function.

// function a(x) {
//     x = x * 7;
//     console.log(x);
// }
// let m = 5;
// a(m); // Arguments are Passed by Value.
// console.log(m);
// Output:
// 35
// 5

// Objects are Passed by Reference:
// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference.
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.

// function a(x) {
//     x.a = 7;
//     return x.a * x.b;
// }
// let m = {
//     a: 3,
//     b: 5
// };
// console.log(a(m));
// console.log(m);
// Output:
// 35
// { a: 7, b: 5 }

