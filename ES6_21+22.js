// 21 - Template Literals - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// var a = 5, b = 6;
// console.log("I am " + a + " and I am " + b);
// console.log(`I am ${a} and I am ${b}`);
// Output:
// I am 5 and I am 6
// I am 5 and I am 6


// backticks: ``
// template literals: ${}


// var a = 5, b = 6;
// console.log(`I am ${a + b}`);
// console.log(`I am ${a * b}`);
// Output: 
// I am 11
// I am 30


// console.log("I am test
// this is test");
// SyntaxError: Invalid or unexpected token

// Multi line is not allowed in this way. But in template literals, multi line is 
// allowed.

// console.log(`I am test
// this is test`);
// Output:
// I am test   
// this is test


// console.log(`I am test
//         this is test`);  // (containing 2 tabs)
// Output:
// I am test
//         this is test





// 22 - Tagged Template Literals-Modern JavaScript Syntaxes in Bangla-ES6+in Bangla

// var player1 = "Tamim", player2 = "Fahim";
// console.log(`We have ${player1} and ${player2} in our team.`);
// Output: We have Tamim and Fahim in our team.



// function a(strings, ...values) {
//     console.log(strings);
//     console.log(values);
// }
// var player1 = "Tamim", player2 = "Fahim";
// console.log(a `We have ${player1} and ${player2} in our team.`);
// Output:
// [ 'We have ', ' and ', ' in our team.' ]
// [ 'Tamim', 'Fahim' ]
// undefined

// Backticks er age function ta call hocche. Function ta call houar somoy backticks
// er moddhe theke string gula and value gula alada hoye jabe. string gula alada hoye
// function er strings parameter e chole jabe. ar value gula alada hoye function er
// values array te chole jabe.



function a(strings, ...values) {
    const m = strings.reduce((prev, current) => {
        return prev + current + ((values.length != 0) ? "Mr." + values.shift() : "");
    }, "");
    return m;
}
var player1 = "Tamim", player2 = "Fahim";
console.log(a `We have ${player1} and ${player2} in our team.`);
// Output: We have Mr.Tamim and Mr.Fahim in our team.


// Ei code ta reduce() function based. reduce() function kivabe kaj kore seta 
// 25_Array_Iterations.js ei file e details bujhano ache. Seta bujhle ei code 
// bujha sohoj hobe.

// According to reduce() function, when the callback function is called 1st time,
// prev parameter will be initialized to ""(null value). And current will be the 1st 
// index value of strings. In each iteration, 
// prev + current + ((values.length != 0) ? "Mr." + values.shift() : "") this statement
// will return a value and that value will be the value of prev in next iteration.
// Again, current will be the next index value of strings.
// Thus, this code will be executed.
