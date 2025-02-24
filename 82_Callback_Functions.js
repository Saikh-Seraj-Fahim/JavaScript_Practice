// "I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// 1 ta function call korar somoy jodi parameter hisebe onno ar 1 ta function pass
// kora hoi tahole jei function ta parameter hisebe deoa hoi oi function ta kei
// callback function bole.
// Othoba, 1 ta function call korar somoy jodi parameter hisebe onno ar 1 ta function 
// body soho deoa hoi tahole jei function ta body soho parameter hisebe deoa hoi takei
// callback function bole.
// Sohoj kotha, function er parameter e onno function thakle setai callback function.

// Function Sequence:
// JavaScript functions are executed in the sequence they are called. Not in the 
// sequence they are defined.
// This example will end up displaying "Goodbye":

// function myDisplayer(s) {
//     console.log(s);
// }
// function myFirst() {
//     myDisplayer("Hello");
// }
// function mySecond() {
//     myDisplayer("Goodbye");
// }
// myFirst();
// mySecond();
// Output:
// Hello
// Goodbye

// This example will end up displaying "Hello":

// function myDisplayer(s) {
//     console.log(s);
// }
// function myFirst() {
//     myDisplayer("Hello");
// }
// function mySecond() {
//     myDisplayer("Goodbye");
// }
// mySecond();
// myFirst();
// Output:
// Goodbye
// Hello

// Sequence Control:
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call 
// another function (myDisplayer) to display the result:

// function myDisplayer(s) {
//     console.log(s);
// }
// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = myCalculator(5, 5);
// myDisplayer(result);
// Output: 10

// Or, you could call a calculator function (myCalculator), and let the calculator 
// function call the display function (myDisplayer):

// function myDisplayer(s) {
//     console.log(s);
// }
// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }
// myCalculator(5, 5);
// Output: 10

// The problem with the first example above, is that you have to call two functions to 
// display the result.
// The problem with the second example, is that you cannot prevent the calculator 
// function from displaying the result.
// Now it is time to bring in a callback.

// JavaScript Callbacks:
// A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) with a 
// callback (myCallback), and let the calculator function run the callback after the 
// calculation is finished:

// function myDisplayer(s) {
//     console.log(s);
// }
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);
// Output: 10

// In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.

// Note:
// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());


// Another example of callback function:

const myNumbers = [4, 1, -20, -7, 5, 9, -6]; // Create an Array
const posNumbers=removeNeg(myNumbers, (x) => x >=0);//Call removeNeg with a callback
console.log(posNumbers);
function removeNeg(numbers, callback) { // Keep only positive numbers
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}
// Output: [ 4, 1, 5, 9 ]

// In the example above, (x) => x >= 0 is a callback function.
// It is passed to removeNeg() as an argument.

// When to Use a Callback?
// The examples above are not very exciting.
// They are simplified to teach you the callback syntax.
// Where callbacks really shine are in asynchronous functions, where one function has
// to wait for another function (like waiting for a file to load).
// Asynchronous functions are covered in the next chapter.























