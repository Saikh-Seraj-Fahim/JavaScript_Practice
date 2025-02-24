// Source-LWS

// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, 
// NodeLists, and more.
// iterable - An object that has iterable properties.


let str = "Fahim";
for (let x of str) {
    console.log(x);
}
// Output:
// F
// a
// h
// i
// m


// let str = "Fahim";
// for (let x in str) {
//     console.log(x);
// }
// Output:
// 0
// 1
// 2
// 3
// 4


// let ar = [4, 5, 7, 9, 10];
// for (let x of ar) {
//     console.log(x);
// }
// Output:
// 4
// 5
// 7
// 9
// 10


// for in returns index. But for of returns value. That's why for of is recommended
// for arrays and strings.


// let ar = [4, 5, 7, 9, 10];
// for (let x in ar) {
//     console.log(x);
// }
// Output:
// 0
// 1
// 2
// 3
// 4


// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//     console.log(x);
// }
// Output:
// BMW
// Volvo
// Mini


// let language = "JavaScript";
// for (let x of language) {
//     console.log(x);
// }
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


// for of loop is recommended for arrays, strings.