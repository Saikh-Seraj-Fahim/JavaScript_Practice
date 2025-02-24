// JavaScript Closures

// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// Global Variables:
// A function can access all variables defined inside the function, like this:

// function myFunction() {
//     let a = 4;  // local variable
//     console.log(a * a);
// }
// myFunction();
// Output: 16

// But a function can also access variables defined outside the function, like this:

// let a = 4; // global variable
// function myFunction() {
//     console.log(a * a);
// }
// myFunction();
// Output: 16

// In the last example, a is a global variable.
// In a web page, global variables belong to the page.
// Global variables can be used (and changed) by all other scripts in the page.
// In the first example, a is a local variable.
// A local variable can only be used inside the function where it is defined. It is 
// hidden from other functions and other scripting code.
// Global and local variables with the same name are different variables. Modifying one, 
// does not modify the other.

// Note:
// Variables created without a declaration keyword (var, let, or const) are always 
// global, even if they are created inside a function.

// function myFunction() {
//     a = 4;  //global variable
// }
// myFunction();
// console.log(a * a);
// Output: 16

// Variable Lifetime:
// Global variables live until the page is discarded, like when you navigate to another 
// page or close the window.
// Local variables have short lives. They are created when the function is invoked, and 
// deleted when the function is finished.

// Upor er je code tai global variable ache seta jodi HTML file e run kora hoi,tahole
// same output paoa jabe.But HTML file ta run korar por je web page e output asbe sei 
// page tai global variable tar lifetime.Mane page ta joto khon ami browse korbo ba use
// korbo oi global variable ta toto khon kaj korbe.Page ta jodi kete deoa hoi ba onno 
// page e jaoa hoi ba page ta jodi reload deoa hoi tahole global variable ta ar kaj 
// korbe na.Mane lifetime ses hoye jabe.
// But local variable er lifetime hocche jokhon function ta call kora hoi.Joto khon
// function tar kaj chole toto khon local variable tar lifetime.Function tar kaj ses 
// hoye gele jokhon function ta value return kore dei,tokhon e sathe sathe local
// variable ta destroy hoye jai.Tar lifetime ses hoye jai.


// A Counter Dilemma:
// Suppose you want to use a variable for counting something, and you want this counter 
// to be available to all functions.
// You could use a global variable, and a function to increase the counter.

// let counter = 0;  //global variable
// function add() {  // Function to increment counter
//     counter = counter + 1;
// }
// add();
// add();
// add();
// console.log("The counter is: " + counter);
// Output- The counter is: 3

// There is a problem with the solution above: Any code on the page can change the 
// counter, without calling add(). Such as:

// let counter = 0;  //global variable
// function add() {  // Function to increment counter
//     counter = counter + 1;
// }
// add();
// add();
// add();
// counter = 6;
// console.log("The counter is: " + counter);
// Output- The counter is: 6


// The counter should be local to the add() function, to prevent other code from
// changing it:

// let counter = 0;  //global variable
// function add() {
//     let counter = 0;  //local variable
//     counter = counter + 1;
// }
// add();
// add();
// add();
// console.log("The counter is: " + counter);
// Output- The counter is: 0


// It did not work because we display the global counter instead of the local counter.
// We can remove the global counter and access the local counter by letting the 
// function return it:


// function add() {  // Function to increment counter
//     let counter = 0;
//     counter = counter + 1;
//     return counter;
// }
// console.log(add());
// console.log(add());
// console.log(add());
// Output:
// 1
// 1
// 1

// It did not work because we reset the local counter every time we call the function.
// A JavaScript inner function can solve this.


// JavaScript Nested Functions:
// All functions have access to the global scope.
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope
// "above" them.
// In this example, the inner function plus() has access to the counter variable in the
// parent function:

// Parent function er sob kichu access korte pare child function.But parent function
// tar child function er sob kichu access korte pare na.
// Child function ke parent function er baire theke call kora jai na ba access kora
// jai na.


// function add() { //parent function
//     let counter = 0;
//     function plus() { //child function
//         counter = counter + 1;
//     }
//     plus();
//     return counter;
// }
// console.log(add());
// Output: 1


// This could have solved the counter dilemma, if we could reach the plus() function
// from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.


// JavaScript Closures:

function temporary() {
    let counter = 0;
    return function () {
        counter = counter + 1;
        return counter;
    }
}
const add = temporary();
console.log(add());
console.log(add());
console.log(add());
// Output:
// 1
// 2
// 3

// Behind the scene, the add() is:

// function add() {
//     counter = counter + 1;
//     return counter;
// }



// const add = (function () {
//     let counter = 0;
//     return function () {
//         counter = counter + 1;
//         return counter;
//     }
// })();
// console.log(add());
// console.log(add());
// console.log(add());
// Output:
// 1
// 2
// 3

// Behind the scene, the add() is:

// function add() {
//     counter = counter + 1;
//     return counter;
// }


// Parent function ke just 1 bar e call kora hobe ba self invoking function er maddhom
// e parent function ta 1 bar auto call hobe. Parent function tokhon tar child function
// ke return korbe. Sei return kora child function ta add variable e store hocche.
// Mane add nijei 1 ta function hoye geche. Se jonno add er sathe first bracket add
// korle return kora child function ta call hocche. Etai hocche function closure.

// Amra jodi chai parent function sudhu 1 bar call hobe but child function bar bar
// call hobe tahole tokhon amra function closure use kori.

// Example Explained:
// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and
// returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the
// counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have
// "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be
// changed using the add function.

// A closure is a function having access to the parent scope, even after the parent
// function has closed.

