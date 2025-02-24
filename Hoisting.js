// YC-LWS 
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// This is valid in JS because of hoisting.
// x=5
// console.log(x)
// var x

// Output:5


// For hoisting the above code is executed like this.
// var x
// x=undefined
// x=5
// console.log(x)

// Output:5

// var performs hoisting.it allocates memory for that varible with default value
// is undefined.so later value 5 can be assigned to x. because there has memory 
// allocated for x.


// For let
// x=5
// console.log(x)
// let x

// ReferenceError: Cannot access 'x' before initialization


// For hoisting the above code is executed like this.
// let x
// x=5
// console.log(x)

// let also performs hoisting.but it does not allocate any memory for that varible.
// so value 5 can not be assigned to x. because there has no memory allocated for x.
// so ReferenceError occurs.


// function A()
// {
//     x=5
//     console.log(x)
//     let x
// }
// A();
// ReferenceError: Cannot access 'x' before initialization

// For hoisting the above code is executed like this.
// function A()
// {
//     let x
//     x=5
//     console.log(x)
// }
// A();
// here,let also performs hoisting.but it does not allocate any memory for that varible.
// so value 5 can not be assigned to x. because there has no memory allocated for x.
// so ReferenceError occurs.


// const carName
// carName="Volvo"
// SyntaxError: Missing initializer in const declaration

// const carName="Volvo"
// This is right
// For const variable, declaration and initialization must be simultaneously


var x=5
console.log(x,y)
var y=7
// Output: 5 undefined

// For hoisting the above code is executed like this.
// var x
// x=5
// console.log(x,y)
// var y
// y=7

// For hoisting, only declaration part is hoisted.Initialization is not hoisted.
// So, the above code further is modified as:
// var x // x=undefined
// var y // y=undefined
// x=5
// console.log(x,y)
// y=7 //Initialization is not hoisted.


// Source-GFG
// console.log(name);
// var name = 'Mukul Latiyan';
// Output:undefined

// For hoisting the above code is executed like this.
// console.log(name);
// var name 
// name= 'Mukul Latiyan';

// After hoisting:
// var name //hoisting
// // name=undefined
// console.log(name);
// name= 'Mukul Latiyan'; //Initialization is not hoisted.


// console.log(name);
// var name = 'Mukul Latiyan';
// console.log(name);

// Output:
// undefined
// Mukul Latiyan


// The above code will be hoisted as:
// var name //hoisting
// name=undefined
// console.log(name);
// name = 'Mukul Latiyan';
// console.log(name);


// var name;
// console.log(name);
// name = 'Mukul Latiyan';
// Output: undefined


// function fun() 
// {
//     console.log(name);
//     var name = 'Mukul Latiyan';
// }
// fun();
// Output: undefined


// The above code will be hoisted as:
// function fun() 
// {
//     var name //Only declaration is hoisted
//     // name=undefined
//     console.log(name);
//     name = 'Mukul Latiyan';
// }
// fun();


// var name;
// function fun() 
// {
//     console.log(name);
//     name = 'Mukul Latiyan';
// }
// fun();
// Output: undefined


// fun(); // Calling before declaration
// function fun() // Declaring
// { 
//     console.log("Function is hoisted");
// }
// Output:Function is hoisted


// For hoisting, the code will be as:
// function fun()
// { 
//     console.log("Function is hoisted");
// }
// fun();


// fun() // Calling the expression
// let fun = () => // Declaring
// { 
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }
// ReferenceError: Cannot access 'fun' before initialization

// It seems you're trying to define and use an arrow function in JavaScript. However, 
// there's an issue with the order of your code. In JavaScript, if you try to use a 
// function before it's defined (like you're doing with fun()), and that function is 
// defined as a variable with let, it will result in a ReferenceError. This is because 
// variables declared with let are not hoisted in the same way as function declarations.
// Explanation-chatgpt

// To fix this, you should either define fun as a function declaration or call the 
// function after it's defined.

// fun(); // This will work
// function fun() 
// {
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }
// Output: Mukul Latiyan


// let fun = () => 
// {
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }
// fun(); // This will work
// Output: Mukul Latiyan


// fun() // Calling the expression
// var fun = () => // Declaring
// {   
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }
// TypeError: fun is not a function


//In this case, you are using var to declare the fun arrow function. While var has 
//function-level scoping and is hoisted, only the declaration is hoisted, not the 
//assignment of the function itself.This means that when you call fun() before the 
//assignment, the function isn't yet initialized, so it will result in an error: 
//TypeError: fun is not a function.When the JavaScript engine hoists fun, it knows 
//that fun exists, but it hasn’t yet assigned the arrow function to it. At the point 
//of the fun() call, fun is undefined.
// Explanation-chatgpt


//To fix this, you should call fun() after the function is assigned:
// var fun = () => 
// {
//     let name = 'Mukul Latiyan';
//     console.log(name);
// };
// fun(); // This will work
// Output: Mukul Latiyan


// fun(); // This works because of hoisting
// function fun() 
// {
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }
// Output: Mukul Latiyan
