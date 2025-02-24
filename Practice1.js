// Source-GFG

//console.log("Hello World")
// Output: Hello World

/*
var a = "Hello Geeks"
var b = 10
var c = 12
var d = b + c

console.log(a)
console.log(b)
console.log(c)
console.log(d)
*/
// Output:
// Hello Geeks
// 10
// 12
// 22

/*
let a = "Hello learners"
let b = "joining"
let c = " 12"
let d = b + c

console.log(a)
console.log(b)
console.log(c)
console.log(d)
*/
// Output:
// Hello learners
// joining
//  12
// joining 12


/*
const a = "Hello learners"
console.log(a);
const b = 400;
console.log(b);
const c = "12";
console.log(c);
// Can not change a value for a constant
c = "new"
console.log(c)
*/
// Output:
// Hello learners
// 400
// 12
// d:\JavaScript_Practice\Practice1.js:45     
// c = "new"
//   ^
// TypeError: Assignment to constant variable.


/*
{
    let a = 2;
    var b = 4;
    const c = "Hello";
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
console.log(c);
console.log(a);
*/
// Output:
// 2
// 4
// Hello
// 4
// d:\JavaScript_Practice\Practice1.js:68
// console.log(c);
//             ^
// ReferenceError: c is not defined

//Since variables “a”(let) and “c”(const) are block scoped so we were not able to 
//access them outside their block.


//var keyword
/*
var test = 12//global variable
function foo(){
    console.log(test);
}
foo();
*/
// Output:12


/*
var test1 = 12,
    test2= 14,
    test3 = 16
function foo(){
    console.log(test1, test2, test3);
}
foo();
*/
// Output: 12 14 16


/*
console.log(test);
var test = 12;
*/
// Output:undefined


/*
var test = 12;
var test = 100;
console.log(test);
*/
// Output:100


/*
var test = 12;
function foo(){
    var test = 100;
    console.log(test);
}
foo();
console.log(test);
*/
// Output:
// 100
// 12


/*
'use strict';
var test = 12;
delete(test);
console.log(test);
*/
//SyntaxError: Delete of an unqualified identifier in strict mode. 


//let keyword
/*
{
    let num = 10;
    // calling the function inside block
    console.log(num)
}
// Calling a function outside
// block throws an Error
console.log(num)
*/
// Output:
// 10
// ReferenceError: num is not defined


//global scope
/*let num = 10;
console.log(num);
function fun() 
{
    console.log(num);
}
fun(); // Calling the function
*/
// Output:
// 10
// 10


//function scope
/*function fun() 
{
    let num = 10;
    console.log(num);
}
fun(); //  Calling the function
console.log(num);
*/
// Output:
// 10
// ReferenceError: num is not defined


//Redeclaring Variables in different blocks

let x = 77;
{
    let x = 23;
    console.log(x);
}
console.log(x);

// Output:
// 23
// 77


//Redeclaring Variables in the same blocks
/*
let x=77;
{
    let x = 23; // legal
    console.log(x);
}
let x=67; // illegal
console.log(x);
*/
//SyntaxError: Identifier 'x' has already been declared


// let do not support hoisting.
/*
x=12;
console.log(x);
let x;
*/
//ReferenceError: Cannot access 'x' before initialization









