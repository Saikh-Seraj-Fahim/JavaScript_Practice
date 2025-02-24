// 19 - Destructuring - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// Array Destructuring

// var numbers = [1, 2, 3, 4, 5, 6];
// var [a, b] = numbers;
// console.log(a);
// console.log(b);
// Output:
// 1
// 2

// var numbers = [1, 2, 3, 4, 5, 6];
// var [, a, , , , b] = numbers;
// console.log(a);
// console.log(b);
// Output:
// 2
// 6

// Ei kaj gula loop diye korte gele ba array index use kore korte gele ektu boro hoto.
// But destructuring use kore khub easily kora jacche.

// var numbers = [1, 2, 3, 4, 5, 6];
// var [a, , , , b, ,] = numbers;
// console.log(a);
// console.log(b);
// Output:
// 1
// 5

// var numbers = [1, 2, [3, 100, 500], 4, 6];
// var [, , [, a, b], ,] = numbers;
// console.log(a);
// console.log(b);
// Output:
// 100
// 500

// var numbers = [1, 2, [3, 100, 500], 4, 6];
// var [, , [a, b, ,], ,] = numbers;
// console.log(a);
// console.log(b);
// Output:
// 3
// 100

// Swapping two variables:
// Old way:

// var a = 2, b = 5, temp;
// temp = a;
// a = b;
// b = temp;
// console.log("a=" + a);
// console.log("b=" + b);
// Output:
// a=5
// b=2

// New way:

// var a = 2, b = 5;
// [a, b] = [b, a];
// console.log("a=" + a);
// console.log("b=" + b);
// Output:
// a=5
// b=2

// var a = 2, b = 5;
// [b, a] = [a, b];
// console.log("a=" + a);
// console.log("b=" + b);
// Output:
// a=5
// b=2



// Object Destructuring:

// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35
// };
// const { name } = user;
// console.log(name);
// Output: Fahim

// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35
// };
// const { name: x } = user;
// console.log(x);
// Output: Fahim

// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35,
//     education: {
//         degree: "BSc"
//     }
// };
// const { education: { degree } } = user;
// console.log(degree);
// Output: BSc

// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35,
//     education: {
//         degree: "BSc"
//     }
// };
// const { education: { degree: x } } = user;
// console.log(x);
// Output: BSc

// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35
// };
// const { education: { degree: x } = {} } = user;
// console.log(x);
// Output: undefined

// Nested object er khetre jodi vitor er object define kora na thake but amra jodi 
// tobuo sei object er property access korte chai, sei khetre jodi kono default value 
// deoa thake tahole undefined dekhabe. Kono error dekhabe na. 
// Otherwise, error dekhabe.


// const user = {
//     id: 339,
//     name: "Fahim",
//     age: 35
// };
// const { education: { degree: x } } = user;
// console.log(x);
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
// const { library: { react: { company } } } = language;
// console.log(company);
// Output: Facebook


// This code is taken from ES6_25


const language = {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    library: {
        react: {
            company: 'Facebook'
        }
    }
};
const { library: { react: { company: x } } } = language;
console.log(x);
// Output: Facebook


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich'
// };
// const { library: { react: { company: x } = {} } = {} } = language;
// console.log(x);
// Output: undefined


// const language = {
//     name: 'JavaScript',
//     creator: 'Brendan Eich'
// };
// const { library: { react: { company: x } } } = language;
// console.log(x);
// Output: TypeError

