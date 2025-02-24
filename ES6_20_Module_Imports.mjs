// Serial-1

// import { pi, a } from './ES6_20_Module_Exports.mjs'; // named import
// console.log(pi);
// console.log(a);
// Output:
// 3.14
// 2.9


// Serial-2

// Export file theke sob kichu import korte chaile evabe likhte hobe:

// import * as test from './ES6_20_Module_Exports.mjs'; // named import
// console.log(test);
// Output: [Module: null prototype] { a: 2.9, pi: 3.14 }


// Serial-3

// import * as test from './ES6_20_Module_Exports.mjs'; // named import
// console.log(test.a);
// console.log(test.pi);
// Output:
// 2.9
// 3.14


// Serial-4

// import { a as varA, pi as varPi } from './ES6_20_Module_Exports.mjs';// named import
// console.log(varA);
// console.log(varPi);
// Output:
// 2.9
// 3.14


// Serial-5

// import ex from './ES6_20_Module_Exports.mjs'; // default import
// console.log(ex);
// Output: 2.9


// Serial-6

// Ei code e amra default export and named export 2 ta kei import korbo.
// default value tar jonno 2nd bracket lagbe na. But amra jodi chai default export 
// er value tar sathe named export er value tao import korte tahole evabe 2nd bracket 
// diye import korte hobe.

// Eksathe default import and named import korte chaile default export er value ta
// must age import korte hobe. Tarpor named export er value ta import korte hobe. 

// default import er khetre jekono name diye variable ba function ta import kora jabe.
// But named import er khetre export file e jei name diye chilo must oi name diyei 
// import korte hobe.

// import ex, { pi } from './ES6_20_Module_Exports.mjs';
// console.log(ex);
// console.log(pi);
// Output:
// 2.9
// 3.14


// Serial-7

// import ex, { myFunc, pi } from './ES6_20_Module_Exports.mjs';
// console.log(ex);
// console.log(pi);
// myFunc();
// Output:
// 2.9
// 3.14
// I am a function.


// Serial-8

// import ex, { pi, a } from './ES6_20_Module_Exports.mjs';
// console.log(pi);
// console.log(a);
// ex();
// Output:
// 3.14
// 2.9
// I am a function.

// Ei code e default export hocche function ta. Tai function import korte 2nd bracket
// lagbe na. Mane ex hocche sei function. ar 2 ta variable named export chilo. tai
// segulo 2nd bracket diye import kora hoyeche.


// ES6_25_ES2020_Some_Exciting_Features_Of_ES11

// Dynamic Import

// Serial-9 

(async function () {
    const { add, remove } = await import('./ES6_20_Module_Exports.mjs');
    add();
    remove();
})();
// Output:
// Adding
// Removing

// Return value: import() returns a promise.

// The above code can be written manually as:

// import('./ES6_20_Module_Exports.mjs')
//     .then(({ add, remove }) => {
//         add();
//         remove();
//     });
// Output:
// Adding
// Removing
