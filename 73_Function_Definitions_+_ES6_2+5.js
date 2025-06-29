// JavaScript Function Definitions

// JavaScript functions are defined with the function keyword.
// You can use a function declaration or a function expression.

// Function Declarations:

// Earlier in this tutorial, you learned that functions are declared with the following
// syntax.

// function functionName(parameters) {
//     // code to be executed
// }
// Declared functions are not executed immediately. They are "saved for later use", and
// will be executed later, when they are invoked (called upon).

// Semicolons are used to separate executable JavaScript statements.
// Since a function declaration is not an executable statement, it is not common to end 
// it with a semicolon.

// Function Expressions:
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable.

// const x = function (a, b) {
//     return a * b
// };
// console.log(x);
// console.log(x(3,5));
// Output:
// [Function: x]
// 15

// After a function expression has been stored in a variable, the variable can be used
// as a function.

// const x = function (a, b) {return a * b};
// let z = x(4,3);
// console.log(z);
// Output:12

// The function above is actually an anonymous function (a function without a name).
// Functions stored in variables do not need function names. They are always invoked
// (called) using the variable name.
// The function above ends with a semicolon because it is a part of an executable
// statement.

// The Function() Constructor:
// As you have seen in the previous examples, JavaScript functions are defined with the
// function keyword.
// Functions can also be defined with a built-in JavaScript function constructor called
// Function().

// const myFunction = new Function("a", "b", "return a * b");
// let x = myFunction(4,3);
// console.log(x);
// Output:12

// You actually don't have to use the function constructor. The example above is the
// same as writing:

// const myFunction = function (a, b) {return a * b};
// let x = myFunction(4,3);
// console.log(x);
// Output:12

// Most of the time, you can avoid using the new keyword in JavaScript.

// Function Hoisting:
// Earlier in this tutorial, you learned about "hoisting" (JavaScript Hoisting).
// Hoisting is JavaScript's default behavior of moving declarations to the top of the
// current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared.

// let a = myFunction(5);
// console.log(a);
// function myFunction(y) {
//     return y * y;
// }
// Output:25

// It will be executed as:

// function myFunction(y) {   // Function declaration is hoisted.
//     return y * y;
// }
// let a = myFunction(5);
// console.log(a);
// Output:25


// Functions defined using an expression are not hoisted. It means function expressions 
// are not hoisted.Such as:

// console.log(a());
// let a=function(){
//     //code
// }
// ReferenceError: Cannot access 'a' before initialization

// It will be executed as:

// let a; // Only declaration is hoisted.
// console.log(a());
// a=function(){
//     //code
// }

// Self-Invoking Functions: (IIFE-Immediately Invoked Function Expression)
// Function expressions can be made "self-invoking".
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// You have to add parentheses around the function to indicate that it is a function
// expression.

// (function () {
//     console.log("Hello! I called myself.");
// })();
// Output: Hello! I called myself.

// IIFE with parameters (YouTube Channel-OOAAOW)
// (function (name) {
//     console.log(`Hello ${name}`);
// })("Rajshahi");
// Output: Hello Rajshahi

// ((name) => {
//     console.log(`Hello ${name}`);
// })("Rajshahi");
// Output: Hello Rajshahi

// The function above is actually an anonymous self-invoking function (function without
// name).

// Functions Can Be Used as Values.
// function myFunction(a, b) {
//     return a * b;
// }
// let x = myFunction(4, 3);
// console.log(x);
// Output:12

// function myFunction() {
//     console.log("Hello");
// }
// let result = myFunction();
// console.log(result);
// Output:
// Hello
// undefined

// JavaScript functions can be used in expressions:

// function myFunction(a, b) {
//     return a * b;
// }
// let x = myFunction(4, 3) * 2;
// console.log(x);
// Output:24

// Functions are Objects:
// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.
// The arguments.length property returns the number of arguments received when the
// function was invoked.

// function myFunction(a, b) {
//     return arguments.length;
// }
// console.log(myFunction(4, 3));
// console.log(typeof (myFunction));
// Output:
// 2
// function

// function myFunction(a, b) {
//     console.log(arguments);
// }
// myFunction(4, 3);
// Output: [Arguments] { '0': 4, '1': 3 }

// The toString() method returns the function as a string:

// function myFunction(a, b) {
//     return a * b;
// }
// let text = myFunction.toString();
// console.log(text);
// Output:
// function myFunction(a, b) {
//     return a * b;
// }

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.

// const a = {
//     firstName: 'Sumit',
//     sleep: function () { //method

//     }
// }





// Arrow Functions:
// Arrow functions allow a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

// ES5
// var x = function (x, y) {
//     return x * y;
// }

// ES6
// const x = (x, y) => x * y;

// Arrow er bam pas ta parameter area. Ar arrow er dan pas ta function er body area.

// const x = (x, y) => x * y;
// console.log(x(5,7));
// Output:35

// const x = () => 55;
// console.log(x());
// Output:55

// let number = () => console.log(12);
// number();
// Output: 12

// Arrow function er body te sudhu 1 ta statement thakle 1 line ei likha jai.But 1 er
// odhik statement thakle 2nd bracket diye multi line e likhte hobe.

// const x = () => {
//     console.log("Hello");
//     return 55;
// }
// console.log(x());
// Output:
// Hello
// 55

// const ob = {
//     a: 5,
//     b: function () {
//         console.log(this.a);
//     }
// }
// console.log(ob.a);
// ob.b();
// Output:
// 5
// 5

// let a = 7;
// const ob = {
//     a: 5,
//     b: () => {
//         console.log(this.a);
//     }
// }
// console.log(ob.a);
// ob.b();
// Output:
// 5
// undefined

// Array function er moddhe this use kora jabe na. this ei khetre kaj kore na.
// Array function er moddhe this use korle seta undefined store korbe.

// Arrow functions do not have their own this. They are not well suited for defining
// object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always
// constant value.
// You can only omit the return keyword and the curly brackets if the function is a
// single statement. Because of this, it might be a good habit to always keep them:

// const x = (x, y) => { return x * y };
// console.log(x(3, 4));
// Output:12

// Arrow functions are not supported in IE11 or earlier.

// const x = (x, y) =>  return x * y ;
// console.log(x(3, 4));
// SyntaxError: Unexpected token 'return'

// Jodi arrow function akar e likha hoi, tahole return use korle 2nd bracket use kora
// lagbe. return use kore 2nd bracket use na korle SyntaxError dibe.


// var javascript = {
//     name: "JavaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach(function (a) {
//             console.log(`${this.name} loves ${a}`);
//         });
//     }
// };
// javascript.printLibraries();
// Output:
// undefined loves React
// undefined loves Angular
// undefined loves Vue

// Ei code e prothom this dara javascript object kei bujhache.But forEach() function er
// moddhe jei this seta global object ke bujhache. global object er moddhe name nam e
// kono property nai.Tai forEach() function er moddhe this.name undefined print korche.

// Ei problem ta solve kora jai arrow function use kore.

// var javascript = {
//     name: "JavaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach((a) => {
//             console.log(`${this.name} loves ${a}`);
//         });
//     }
// };
// javascript.printLibraries();
// Output:
// JavaScript loves React
// JavaScript loves Angular
// JavaScript loves Vue

// forEach() er baire prothom this javascript object ke bujhato. Arrow function use
// korle forEach() er moddheo this sei javascript object kei bujhabe. Tai forEach() er
// moddhe arrow function use korle ar kono problem hobe na.
// Mane forEach() er moddhe arrow function use korle this forEach() er vitor e baire
// same object kei bujhai. Tai kono problem hoi na.

// The above arrow function can also be written as:

// var javascript = {
//     name: "JavaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
//     }
// };
// javascript.printLibraries();
// Output:
// JavaScript loves React
// JavaScript loves Angular
// JavaScript loves Vue



// 5 - Array find() method - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log("Hello");
//     }
//     exampleFunction() {
//         let numbers = [1, 2, 3];
//         numbers.find(function () {
//             this.test();
//         });
//     }
// }
// let student = new Student("Sumit", 35);
// student.exampleFunction();
// TypeError: Cannot read properties of undefined (reading 'test')
// this.test();
//     ^

// Ei code e find() er moddhe callback function er body te jei this use kora hoyeche
// seta dara global object ke bujhache. global object er moddhe test() nam e kono
// function property hisebe nai. Tai find() function er moddhe this.test() undefined
// dekhache and TypeError dekhache.


// Ei problem tao solve kora jai arrow function use kore.

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log("Hello");
//     }
//     exampleFunction() {
//         let numbers = [1, 2, 3];
//         numbers.find(() => {
//             this.test();
//         });
//     }
// }
// let student = new Student("Sumit", 35);
// student.exampleFunction();
// Output:
// Hello
// Hello
// Hello

// Ei code e find() er moddhe callback function e jodi arrow function use kora hoi
// tahole this.test() dara class er moddhe thaka test() function kei bujhabe. Tai
// kono error hobe na.




// 17:30 theke start (#2 - JavaScript Fat Arrow Functions Bangla Tutorial)