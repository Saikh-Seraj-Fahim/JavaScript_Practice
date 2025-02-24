// (1) globalThis

// Browser e amra jokhon html file run kori, tokhon global object hocche window.
// See more about global window object on this file- 75_Function_Invocation.html

// But amra jokhon Node JS e javascript file run kori, tokhon golabl object hocche 
// global.

// var a = 3;
// console.log(global.a);


// But amra jodi chai emon 1 ta code likhbo jeta browser eo cholbe abar Node JS eo 
// cholbe tahole global object hisebe globalThis use korbo.

// var a = 3;
// console.log(globalThis.a);


// (2) BigInt()

// let largest_number = Number.MAX_SAFE_INTEGER;
// console.log(largest_number);     //9007199254740991 (Maximum value of integer)
// console.log(largest_number + 1); //9007199254740992
// console.log(largest_number + 2); //9007199254740992


// 9007199254740991 er sathe 1 add hocche. But 9007199254740991 er sathe 2 add korleo
// ager value e thakche. Karon integer er range cross kore geche. Tahole amader jodi
// 9007199254740991 ba 9007199254740992 er theke boro value dorkar hoi, tahole amra
// ki korbo? Tokhon amra BigInt() use korbo.


// let largest_number = Number.MAX_SAFE_INTEGER; //9007199254740991
// console.log(largest_number);
// console.log(largest_number + 1);
// console.log(BigInt(largest_number) + 2n);
// Output:
// 9007199254740991
// 9007199254740992
// 9007199254740993n

// Lower case "n" dara Big Integer bujhai.

// Big integer er sathe integer addition,subtraction,multiplication,division hobe na.
// Error dekhabe. Big integer er sathe sudhu big integer er e arithmetic operation 
// hobe. 

// Equality checking:

// 10n === BigInt(10) // True
// 10n == 10          // True
// 10n === 10         // False

// Tripple equal thakle value and data type 2 tai same houa lagbe. Tahole true.
// But double equal thakle sudhu value same holei True hobe.


// (3) Optional Chaining

// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich',
//     library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// };
// let a = language.library.react.company;
// console.log(a);
// Output: Facebook


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich'
// };
// let a = language.library.react.company;
// console.log(a);
// Output: TypeError


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich',
//     library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// };
// let a = language && language.library && language.library.react &&
//     language.library.react.company;
// console.log(a);
// Output: Facebook


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich'
// };
// let a = language && language.library && language.library.react &&
//     language.library.react.company;
// console.log(a);
// Output: undefined


// Using optional chaining, we can do this work very easily.

// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich',
//     library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// };
// let a = language?.library?.react?.company;
// console.log(a);
// Output: Facebook


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich'
// };
// let a = language?.library?.react?.company;
// console.log(a);
// Output: undefined


// let colors = ['red', 'green', 'blue'];
// console.log(colors[1]);
// Output: green


// let colors = [];
// console.log(colors[1]);
// Output: undefined


// let colors = [];
// colors = null;
// console.log(colors[1]);
// Output: TypeError: Cannot read properties of null (reading '1')


// let colors = [];
// colors = null;
// console.log(colors?.[1]);
// Output: undefined



// (4) Nullish Coalescing Operator (??)

// Nullish means null and undefined.
// Nullish Coalescing Operator er left e jodi null ba undefined value thake, tahole 
// right er ta return kore.

// let language;
// console.log(language);
// console.log(language ?? 'JavaScript');
// Output: 
// undefined
// JavaScript


// false, 0, "", null, undefined, NaN ei 6 ta kono variable e thakle sei variable er 
// value false. Mane ei 6 ta falsy value. Baki sob khetre true.


// let language;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// JavaScript
// JavaScript


// let language = undefined;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// JavaScript
// JavaScript


// let language;
// language = null;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// JavaScript
// JavaScript


// let language;
// language = NaN;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// NaN
// JavaScript


// let language;
// language = 0;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// 0
// JavaScript


// let language;
// language = false;
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:
// false
// JavaScript


// let language;
// language = '';
// console.log(language ?? 'JavaScript');
// console.log(language || 'JavaScript');
// Output:

// JavaScript


// console.log(name.firtName || name.lastName ?? 'Anonymous');
// Output: SyntaxError

// console.log((name.firtName || name.lastName) ?? 'Anonymous');
// Eta error dekhabe na. Karon bracket use kora hoyeche.


// Nullish Coalescing Assignment (??=) Operator (GFG)
// Nullish Coalescing Assignment Operator er left e jodi null ba undefined value thake,
// tahole right er value ta left e assign hobe.
// The below code is taken from GFG.

// let x = 12;
// let y = null;
// let z = 13;
// x ??= z;  // The value of x will become unchanged because x is not nullish. 
// y ??= z;  // The value of y will be changed because y is nullish.
// console.log(x) // 12 
// console.log(y) // 13
// Output:
// 12
// 13


// (5) Dynamic Import : See this topic on ES6_20_Module_Exports.mjs 
//     and ES6_20_Module_Imports.mjs


// (6) Promise.allSettled()

// const promise1 = new Promise((resolve, reject) => resolve("Burger"));
// const promise2 = new Promise((resolve, reject) => resolve("Apple"));
// const promise3 = new Promise((resolve, reject) => resolve("Pizza"));
// Promise.all([promise1, promise2, promise3])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
// Output: [ 'Burger', 'Apple', 'Pizza' ]

// Promise.all: (chatGPT)
// Promise.all takes an array of promises and waits for all of them to either:
// Resolve → Returns an array of resolved values if all promises are fulfilled.
// Reject → Immediately rejects with the first rejected promise encountered.


// const promise1 = new Promise((resolve, reject) => resolve("Burger"));
// const promise2 = new Promise((resolve, reject) => reject("Apple"));
// const promise3 = new Promise((resolve, reject) => resolve("Pizza"));
// Promise.all([promise1, promise2, promise3])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
// Output: Apple

// Behavior of Promise.all: (chatGPT)
// Since promise2 is rejected, the catch block is executed immediately with the error
// value "Apple". The remaining promises are ignored once a rejection occurs.


// Kintu amra jodi chai, promise gula true hok ba false hok sob promise eksathe 
// execute korbo ba run korbo tahole amra Promise.allSettled() function use korbo.
// Use Promise.allSettled() function if you want to handle both fulfilled and rejected 
// promises. (chatGPT)

const promise1 = new Promise((resolve, reject) => resolve("Burger"));
const promise2 = new Promise((resolve, reject) => reject("Apple"));
const promise3 = new Promise((resolve, reject) => resolve("Pizza"));
Promise.allSettled([promise1, promise2, promise3])
    .then(value => console.log(value));
// Output:
// [
//     { status: 'fulfilled', value: 'Burger' },
//     { status: 'rejected', reason: 'Apple' },
//     { status: 'fulfilled', value: 'Pizza' }
// ]


