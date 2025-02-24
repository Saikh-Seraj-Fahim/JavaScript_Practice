// 15 - Important object tricks - Modern JavaScript Syntaxes in Bangla- ES6 + in Bangla

// Important object methods:

// var myObj = {
//     name: "JavaScript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1
// };
// var keys = Object.keys(myObj);
// console.log(keys);
// Output:[ 'name', 'founder', 'estd', 'ranking' ]

// var myObj = {
//     name: "JavaScript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1
// };
// var values = Object.values(myObj);
// console.log(values);
// Output:[ 'JavaScript', 'Brendan Eich', '1995', 1 ]

// var myObj = {
//     name: "JavaScript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1
// };
// var entries = Object.entries(myObj);
// console.log(entries);
// Output:
// [
//     [ 'name', 'JavaScript' ],
//     [ 'founder', 'Brendan Eich' ],
//     [ 'estd', '1995' ],
//     [ 'ranking', 1 ]
// ]

// var x = 4;
// var y = 5;
// var z = x * y;
// var myObj = {
//     name: "JavaScript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1,
//     x: x,
//     y: y,
//     z: z
// };
// console.log(myObj);
// Output:
// {
//     name: 'JavaScript',
//     founder: 'Brendan Eich',
//     estd: '1995',
//     ranking: 1,
//     x: 4,
//     y: 5,
//     z: 20
// }

// Object er bairer kono variable ke amra evabe object er property er value hisebe 
// use korte pari.
// The above code can be written as like this. This is called object shorthand.

// var x = 4;
// var y = 5;
// var z = x * y;
// var myObj = {
//     name: "JavaScript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1,
//     x,
//     y,
//     z
// };
// console.log(myObj);
// Output:
// {
//     name: 'JavaScript',
//     founder: 'Brendan Eich',
//     estd: '1995',
//     ranking: 1,
//     x: 4,
//     y: 5,
//     z: 20
// }




// 16-Function default parameter-Modern JavaScript Syntaxes in Bangla-ES6 + in Bangla

// function myFunc(x) {
//     return x;
// }
// console.log(myFunc(3));
// Output:3

// function myFunc(x) {
//     return x;
// }
// console.log(myFunc());
// Output: undefined

// Function default parameter

// function myFunc(x = 10) {
//     return x;
// }
// console.log(myFunc());
// Output:10

// Function call korar somoy parameter na dile x er value 10 hobe. But parameter dile
// x er value 10 hobe na.

// function myFunc(x = 10) {
//     return x;
// }
// console.log(myFunc(5));
// Output:5

// function myFunc(x = 10) {
//     return x;
// }
// console.log(myFunc(undefined));
// Output:10

// function myFunc(x = 10) {
//     return x;
// }
// console.log(myFunc(null));
// Output: null
