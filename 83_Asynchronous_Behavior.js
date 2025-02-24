// console.log("Line 1 code");
// console.log("Line 2 code");
// console.log("Line 3 code");
// Output:
// Line 1 code
// Line 2 code
// Line 3 code

// function hello() {
//     console.log("Line 2 code");
// }
// console.log("Line 1 code");
// hello();
// console.log("Line 3 code");
// Output:
// Line 1 code
// Line 2 code
// Line 3 code

// Upor er 2 ta code hocche Synchronous.Karon ekhan e sequentially code ta run hocche.
// Akhon asynchronous er example dekhbo.

// Asynchronous JavaScript:
// "I will finish later!"
// Functions running in parallel with other functions are called asynchronous.
// A good example is JavaScript setTimeout()

// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().

// console.log("Line 1 code");
// setTimeout(function () {
//     console.log("Line 2 code");
// }, 2000);
// console.log("Line 3 code");
// Output:
// Line 1 code
// Line 3 code
// Line 2 code

// setTimeout function er prothom parameter ta hocche 1 ta callback function and 
// 2nd parameter ta hocche koto mili second por function ta execute hobe.

// 2000 mili second = 2 second
// Ei code e 1st line ta prothom e execute hoye jabe.Tarpor jokhon setTimeout function
// er moddhe dhukbe tokhon 2nd parameter dekhe bujhbe 2 second por oi function execute
// kora lagbe.Mane 2 second wait kora lagbe.Toto khon wait na kore last line ta execute
// korbe.Then sobar ses e setTimeout function ta execute korbe. Mane ekhan e 
// sequentially code ta execute hocche na.Tai eta asynchronous er example.

// console.log("Line 1 code");
// setTimeout(function () {
//     console.log("Line 2 code");
// }, 0);
// console.log("Line 3 code");
// Output:
// Line 1 code
// Line 3 code
// Line 2 code

// Ekhan e 0 mili second.Tao same output.Asynchronous function dekhlei JavaScript
// oi function ke waiting e rekhe baki kaj gula korbe.Tarpor last e sei function er kaj
// korbe. Mane pura ager moto korei code ta run hobe.



// console.log("Line 1 code");
// setInterval(function () {
//     console.log("Line 2 code");
// }, 2000);
// console.log("Line 3 code");
// Output:
// Line 1 code
// Line 3 code
// Line 2 code
// Line 2 code
// Line 2 code
// ............
// ............

// setInterval() o 1 ta asynchronous function.Mane sob kaj ses hoye setInterval()
// er kaj sobar last e hobe.
// setInterval() function er 2nd parameter dara bujhai koto mili second por por 
// function ta execute hobe.
// Ei code e function ta 2 second por por execute hobe. Infinite bar execute hotei
// thakbe.

// setTimeout() function ta sob kaj ses e just 1 bar e call hobe.But setInterval()
// function ta sob kaj ses e bar bar call hotei thakbe.

// setInterval(function () {
//     let d = new Date();
//     console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }, 1000);
// Output:
// 19:22:39
// 19:22:40
// 19:22:41
// 19:22:42
// 19:22:43
// 19:22:44
// .........
// .........
// Evabe cholte thakbe.

// The above function can be written as:

// setInterval(myFunction, 1000);
// function myFunction() {
//     let d = new Date();
//     console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }
// Output:
// 19:22:39
// 19:22:40
// 19:22:41
// 19:22:42
// 19:22:43
// 19:22:44
// .........
// .........
// Evabe cholte thakbe.

// In the example above, myFunction is used as a callback.
// myFunction is passed to setInterval() as an argument.
// 1000 is the number of milliseconds between intervals,so myFunction() will be called 
// every second.

// Callback Alternatives:
// With asynchronous programming, JavaScript programs can start long-running tasks, and 
// continue running other tasks in parallel.
// But, asynchronus programmes are difficult to write and difficult to debug.
// Because of this, most modern asynchronous JavaScript methods don't use callbacks. 
// Instead, in JavaScript, asynchronous programming is solved using Promises instead.





