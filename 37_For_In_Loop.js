// Source-LWS

// The JavaScript for in statement loops through the properties of an Object.

// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };
// for (let x in person) {
//     console.log(x);
// }
// Output:
// fname
// lname
// age


const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};
for (let x in person) {
    console.log(person[x]); // console.log(person.x) is invalid
}
// Output:
// John
// Doe
// 25


// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };
// let text = "";
// for (let x in person) {
//     text = text + person[x]; // text += person[x];
// }
// console.log(text);
// Output: JohnDoe25


// For In Over Arrays

// const numbers = [45, 4, 9, 16, 25];
// for (let x in numbers) {
//     console.log(x);
// }
// Output:
// 0
// 1
// 2
// 3
// 4


// const numbers = [45, 4, 9, 16, 25];
// for (let x in numbers) {
//     console.log(numbers[x]);
// }
// Output:
// 45
// 4
// 9
// 16
// 25


// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed
// in the order you expect. It is better to use a for loop, a for of loop, or
// Array.forEach() when the order is important.


// for in loop is recommended for objects.