// Method covered : forEach(), map(), flatMap(), filter(), reduce(), reduceRight(),
// every(), some(), indexOf(), lastIndexOf(), includes(), find(), findIndex(), from(), 
// keys(), entries(), with(), Spread Operator.

// ES6 covered : ES6_17, ES6_26.

// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array 
// element.

// forEach() function parameter hisebe 1 ta callback function nibe and sei callback 
// function er maddhom e array er sob element access korbe.

// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(function (value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("------------");
// });

// Output:
// 45
// 0
// [ 45, 4, 9, 16, 25 ]
// ------------
// 4
// 1
// [ 45, 4, 9, 16, 25 ]
// ------------
// 9
// 2
// [ 45, 4, 9, 16, 25 ]
// ------------
// 16
// 3
// [ 45, 4, 9, 16, 25 ]
// ------------
// 25
// 4
// [ 45, 4, 9, 16, 25 ]
// ------------

// Ei file er motamuti sob built in function er callback function e parameter hisebe 
// value,index,array nei. But output choto korar jonno amra index and array parameter 
// ke bad dibo. Sudhu value parameter niye kaj korbo nicher code gula te.

// const numbers = [45, 4, 9, 16, 25]; 
// numbers.forEach(function (value) {
//     console.log(value);
// });
// Output:
// 45
// 4
// 9
// 16
// 25

// The above code can be written as like this and produce the same output:

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("------------");
// }
// numbers.forEach(myFunction);

// The above code can be written as like this and produce the same output:

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value) {
//     console.log(value);
// }
// numbers.forEach(myFunction);



// JavaScript Array map()

// Jekhan e array er prottek element access kore sei element er upor kono operation 
// chaliye notun element toiri kora hoi and sei notun element gulo ke onno ar 1 ta
// array te store kora hoi, emon khetre loop er poriborte map use kora jai.

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2:

// const numbers = [4, 45, 9, 16, 25];
// const newNumbers = numbers.map(function (value) {
//     return value * 2;
// });
// console.log(newNumbers);
// Output: [ 8, 90, 18, 32, 50 ]

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value, index, array) {
//     return value * 2;
// }
// const newNumbers = numbers.map(myFunction);
// console.log(newNumbers);
// Output: [ 90, 8, 18, 32, 50 ]

// When a callback function uses only the value parameter,the index and array
// parameters can be omitted.

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value) {
//     return value * 2;
// }
// const newNumbers = numbers.map(myFunction);
// console.log(newNumbers);
// Output:
// [ 90, 8, 18, 32, 50 ]


// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.
// The flatMap() method first maps all elements of an array and then creates a new
// array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);
// Output:
// [
//     1, 10,  2, 20,  3,
//     30,  4, 40,  5, 50,
//     6, 60
// ]


// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.
// This example creates a new array from elements with a value larger than 10.

// const numbers = [45, 4, 9, 16, 25];
// const newNumbers = numbers.filter(function (value) {
//     return value > 10;
// });
// console.log(newNumbers);
// Output:[ 45, 16, 25 ]

// filter() method array theke 1 ta kore element nei and sei element er upor condition 
// check kore. Sei condition true hole oi element ke notun array te return kore. Evabe 
// jei element gulo sei condition pass kore tader niye notun array toiri kore.

// Jamon upor er code  e filter() method array theke 1 ta kore element nicche and sei 
// element er upor value>10 ei condition check korche. Sei condition true hole oi 
// element ke notun array newNumbers e return korche. Evabe jei element gulo sei 
// condition pass kore tader niye notun array newNumbers toiri korche.

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value, index, array) {
//     return value > 10;
// }
// const newNumbers = numbers.filter(myFunction);
// console.log(newNumbers);
// Output: [ 45, 16, 25 ]

// In the example above, the callback function does not use the index and array
// parameters, so they can be omitted.

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value) {
//     return value > 10;
// }
// const newNumbers = numbers.filter(myFunction);
// console.log(newNumbers);
// Output: [ 45, 16, 25 ]


// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to)
// a single value.
// The reduce() method works from left-to-right in the array.
// The reduce() method does not reduce the original array.
// This example finds the sum of all numbers in an array:

// const numbers = [4, 45, 9, 16, 25];
// const newNumbers = numbers.reduce(function (total, Value) {
//     return total + Value;
// }, 0);
// console.log(newNumbers);
// Output:99

// Syntax:
// reduce(callbackFn, initialValue);

// initialValue is a value to which total is initialized the first time the callback
// is called. If initialValue is specified, callbackFn starts executing with the first
// value in the array as Value. If initialValue is not specified, total is initialized
// to the first value in the array, and callbackFn starts executing with the second
// value in the array as Value. In this case, if the array is empty (so that there's
// no first value to return as total), an error is thrown. (Source--MDN web docs)

// Upor er code e prottek iteration e (total + Value) mile jei value return korche
// setai next iteration e total er value hocche.

// The reduce() method can accept any value as initialValue. Here is 10:

// const numbers = [4, 45, 9, 16, 25];
// const newNumbers = numbers.reduce(function (total, Value) {
//     return total + Value;
// }, 10);
// console.log(newNumbers);
// Output:109

// reduce() function er aro 1 ta application dekhano hoyeche ES6_21+22.js ei file e.


// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(total, value, index, array) {
//     return total + value;
// }
// const newNumbers = numbers.reduce(myFunction);
// console.log(newNumbers);
// Output:99

// The example above does not use the index and array parameters.It can be rewritten to:

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(total, value) {
//     return total + value;
// }
// const newNumbers = numbers.reduce(myFunction);
// console.log(newNumbers);
// Output:99

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(total, value) {
//     console.log(total);
//     console.log(value);
//     console.log("----------");
//     return total + value;
// }
// const newNumbers = numbers.reduce(myFunction);
// console.log(newNumbers);
// Output:
// 45
// 4
// ----------
// 49
// 9
// ----------
// 58
// 16
// ----------
// 74
// 25
// ----------
// 99

// The reduce() method can accept an initial value:

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(total, value) {
//     return total + value;
// }
// const newNumbers = numbers.reduce(myFunction, 10);
// console.log(newNumbers);
// Output:109

// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it
// to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.
// This example finds the sum of all numbers in an array:

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(total, value, index, array) {
//     return total + value;
// }
// let sum = numbers.reduceRight(myFunction);
// console.log(sum);
// Output:99

// The example above does not use the index and array parameters.It can be rewritten to:

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(total, value) {
//     return total + value;
// }
// let sum = numbers.reduceRight(myFunction);
// console.log(sum);
// Output:99

// JavaScript Array every()
// The every() method checks if all array values pass a test.
// This example checks if all array values are larger than 18:

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//     return value > 18;
// }
// let result = numbers.every(myFunction);
// console.log(result);
// Output:false

// When a callback function uses the first parameter only (value), the other
// parameters can be omitted.

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value) {
//     return value > 18;
// }
// let result = numbers.every(myFunction);
// console.log(result);
// Output:false

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value) {
//     return value > 1;
// }
// let result = numbers.every(myFunction);
// console.log(result);
// Output:true

// JavaScript Array some()
// The some() method checks if some array values pass a test.
// This example checks if some array values are larger than 18.

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//     return value > 18;
// }
// let result = numbers.some(myFunction);
// console.log(result);
// Output:true

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value) {
//     return value > 18;
// }
// let result = numbers.some(myFunction);
// console.log(result);
// Output:true

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value) {
//     return value > 180;
// }
// let result = numbers.some(myFunction);
// console.log(result);
// Output:false

// Array.indexOf()
// The indexOf() method searches an array for an element value and returns its position.
// Note:The first item has position 0,the second item has position 1 and so on.

// const fruits = ["Apple", "Orrange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// console.log(position);
// Output:1

// Array.indexOf() returns -1 if item is not found in array.
// If the item is pesent more than once, it returns the position of first occurrence.

// Array.lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(),but returns the position of the
// last occurrence of the specified element.

// const fruits = ["Apple", "Orrange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;
// console.log(position);
// Output:3

// Array.includes()
// ECMAScript 2016 introduced Array.includes() to arrays.This allows us to check if an
// element is present in an array(including NaN, unlike indexOf).

// const fruits = ["Apple", "Orrange", "Apple", "Mango"];
// let a = fruits.includes("Mango");
// console.log(a);
// Output:true

// Array.find()
// The find() method returns the value of the first array element that passes a
// test function.
// This example finds(returns the value of) the first element that is larger than 16.

// const numbers = [4, 45, 9, 16, 25];
// let result = numbers.find(function (value) {
//     return value > 16;
// });
// console.log(result);
// Output:45

// const numbers = [45, 4, 9, 16, 25]; (Not Needed)
// function myFunction(value) {
//     return value > 16;
// }
// let result = numbers.find(myFunction);
// console.log(result);
// Output:45


// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a
// test function.
// This example finds the index of the first element that is larger than 16.

// const numbers = [4, 45, 9, 16, 25];
// let first = numbers.findIndex(function (value) {
//     return value > 16;
// });
// console.log(first);
// Output:1

// findIndex() function jei condition er upor base kore value khuje sei value na paoa
// gele -1 return kore. Such as:

// const numbers = [4, 45, 9, 16, 25];
// let first = numbers.findIndex(function (value) {
//     return value > 50;
// });
// console.log(first);
// Output: -1

// const numbers = [4, 45, 9, 16, 25]; (Not Needed)
// function myFunction(value) {
//     return value > 16;
// }
// let first = numbers.findIndex(myFunction);
// console.log(first);
// Output:1


// JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length
// property or any iterable object.

// Create an Array from a String:

// console.log(Array.from("ABCDEFG"));
// Output:
// [
//     'A', 'B', 'C',
//     'D', 'E', 'F',
//     'G'
// ]

// JavaScript Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys);
// Output: Object [Array Iterator] {}

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// let text = "";
// for (let x of keys) {
//     text = text + x + " ";
// }
// console.log(text);
// Output: 0 1 2 3

// keys() is an ES6 feature (JavaScript 2015).

// JavaScript Array entries()
// Create an Array Iterator, and then iterate over the key/value pairs:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (let x of f) {
//     console.log(x);
// }
// Output:
// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]

// The entries() method does not change the original array.
// entries() is an ES6 feature (JavaScript 2015).


// JavaScript Array with() Method
// ES2023 added the Array with() method as a safe way to update elements in an array
// without altering the original array.

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths);
// Output: [ 'Januar', 'Februar', 'March', 'April' ]

// ES6_26_ES2023_Four_Exciting_New_Array_Features_Of_ES14

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.with(1, 34);
// console.log(arr);
// console.log(result);
// Output:
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 34, 3, 4, 5, 6 ]


// JavaScript Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);
// Output:
// [
//     'Jan', 'Feb', 'Mar',
//     'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep',
//     'Oct', 'Nov', 'May'
// ]

// ... is an ES6 feature (JavaScript 2015).

// 17 - Spread Operator - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// var numbers = [1, 2, 3];
// var newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);
// Output: [ 1, 2, 3, 4, 5, 6 ]

// var numbers = [1, 2, 3];
// var a = [...numbers]; // exact copy of numbers.
// numbers.push(4);
// console.log(a);
// console.log(numbers);
// Output:
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ]

// var numbers = [1, 2, 3];
// var a = numbers;
// numbers.push(4);
// console.log(a);
// console.log(numbers);
// Output:
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4 ]

// Spread operator use na korle seta reference niye kaj kore. Mane "a" ekhan e numbers
// array er starting address ke point korche. Tai "a" print korle puro numbers array
// tai print hoye jabe.

// var numbers1 = [1, 2, 3];
// var numbers2 = [4, 5, 6];
// var numbers3 = [7, 8, 9];
// var newNumbers = [...numbers1, ...numbers2, ...numbers3];
// console.log(newNumbers);
// Output:
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]

// var myObj1 = {
//     x: 1,
//     y: 2
// };
// var myObj2 = {
//     a: 1,
//     b: 2
// };
// var myObj3 = { ...myObj1, ...myObj2 };
// console.log(myObj3);
// Output: { x: 1, y: 2, a: 1, b: 2 }

