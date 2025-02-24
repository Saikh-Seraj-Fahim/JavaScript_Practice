// Source-LWS

const languages = [
    { title: "JavaScript", type: "scripting" },
    { title: "Java", type: "normal" },
    { title: "Python", type: "scripting" },
];
console.log(languages);
console.log("-----------------------------------------------");

// way 1 (Manual)
// let scriptingLanguages = {};  //(Blank Object)
// languages.forEach((language) => {
//     const type = language.type;

//     if (!scriptingLanguages[type]) {
//         scriptingLanguages[type] = [];
//     }
//     scriptingLanguages[type].push(language);
// });
// console.log(scriptingLanguages);


// way 2 (Manual)
// let scriptingLanguages = {};  //(Blank Object)
// scriptingLanguages = languages.reduce((res, language) => {
//     const type = language.type;
//     if (!res[type]) {
//         res[type] = [];
//     }
//     res[type].push(language);
//     return res;
// }, {});
// console.log(scriptingLanguages);


// way 3 (Using Object.groupBy())
let scriptingLanguages = {};  //(Blank Object)
scriptingLanguages = Object.groupBy(languages, (language) => language.type);
console.log(scriptingLanguages);

// Source-w3schools
// Syntax: Object.groupBy(iterable, callback)
// Return Value: Iterator--An iterable object with the grouped elements.
// Object.groupby() is an ES2024 feature.


// Output: (way 1 + way 2)
//  [
//   { title: 'JavaScript', type: 'scripting' },
//   { title: 'Java', type: 'normal' },
//   { title: 'Python', type: 'scripting' }
// ]
// -----------------------------------------------
// {
//   scripting: [
//     { title: 'JavaScript', type: 'scripting' },
//     { title: 'Python', type: 'scripting' }
//   ],
//   normal: [ { title: 'Java', type: 'normal' } ]
// }


// Output: (way 3)
//  [
//   { title: 'JavaScript', type: 'scripting' },
//   { title: 'Java', type: 'normal' },
//   { title: 'Python', type: 'scripting' }
// ]
// -----------------------------------------------
// [Object: null prototype] {
//   scripting: [
//     { title: 'JavaScript', type: 'scripting' },
//     { title: 'Python', type: 'scripting' }
//   ],
//   normal: [ { title: 'Java', type: 'normal' } ]
// }



// See this code explanation from chatGPT.

