// Reversing an Array:
// The reverse() method reverses the elements in an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());
// Output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]


// ES6_26_ES2023_Four_Exciting_New_Array_Features_Of_ES14

// const arr = [1, 2, 3, 4, 5, 6];
// const reversedArray = arr.reverse();
// console.log(arr);
// console.log(reversedArray);
// Output:
// [ 6, 5, 4, 3, 2, 1 ]
// [ 6, 5, 4, 3, 2, 1 ] 

// reverse() method changes the original array.
// But toReversed() method does not change the original array.

// const arr = [1, 2, 3, 4, 5, 6];
// const reversedArray = arr.toReversed();
// console.log(arr);
// console.log(reversedArray);
// Output:
// [ 1, 2, 3, 4, 5, 6 ]
// [ 6, 5, 4, 3, 2, 1 ]


// JavaScript Array toReversed() Method:
// ES2023 added the toReversed() method as a safe way to reverse an array without
// altering the original array.
// The difference between toReversed() and reverse() is that the first method creates
// a new array, keeping the original array unchanged, while the last method alters the
// original array.

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// console.log(reversed);
// Output: [ 'Apr', 'Mar', 'Feb', 'Jan' ]



// Sorting an array:
// The sort() method sorts an array alphabetically.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.sort();
// console.log(result);
// console.log(fruits);
// Output:
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]


// By combining sort() and reverse(), you can sort an array in descending order:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);
// Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]


// JavaScript Array toSorted() Method:
// ES2023 added the toSorted() method as a safe way to sort an array without altering
// the original array.The difference between toSorted() and sort() is that the first
// method creates a new array, keeping the original array unchanged, while the last
// method alters the original array.

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const result = months.toSorted();
// console.log(result);
// console.log(months);
// Output:
// [ 'Apr', 'Feb', 'Jan', 'Mar' ]
// [ 'Jan', 'Feb', 'Mar', 'Apr' ]

// sort() method changes the original array.
// But toSorted() method does not change the original array.

// See more about toSorted() on 24_Array_toSorted.js


// const points = [40, 100, 1, 5, 25, 10];
// points.sort();
// console.log(points);
// Output: [ 1, 10, 100, 25, 40, 5 ]
// This is sorted alphabetically. How to sort numerically it is shown below.


// Numeric Sort:
// By default, the sort() function sorts values as strings (alphabetically).
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger
// than "1". Because of this, the sort() method will produce incorrect result when
// sorting numbers. You can fix this by providing a compare function.


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return a-b;
// });
// console.log(points);
// Output: [ 1, 5, 10, 25, 40, 100 ]


// Use the same trick to sort an array descending:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return b-a;
// });
// console.log(points);
// Output: [ 100, 40, 25, 10, 5, 1 ]


// The Compare Function:
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on
// the arguments:
// function(a, b){return a-b}
// When the sort() function compares two values, it sends the values to the compare
// function, and sorts the values according to the returned (negative, zero, positive)
// value. If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// Example:
// The compare function compares all the values in the array, two values at a time (a,b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40-100 (a-b), and since the result is negative (-60),  the
// sort function will sort 40 as a value lower than 100.


// Sorting an Array in Random Order:
// Using a sort function, like explained above, you can sort a numeric array in random
// order.

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function () {
//     return 0.5 - Math.random()
// });
// console.log(points);
// Output:
// [ 40, 100, 10, 1, 5, 25 ]
// [ 10, 40, 25, 100, 1, 5 ]
// [ 1, 100, 5, 40, 10, 25 ]
// [ 40, 5, 25, 10, 100, 1 ]
// [ 25, 1, 100, 40, 5, 10 ]
// [ 100, 25, 10, 5, 40, 1 ]
// and so on.

// Math.random() returns a number between 0 to 1.

// Find the Lowest (or Highest) Array Value:
// There are no built-in functions for finding the max or min value in an array.
// To find the lowest or highest value you have 3 options:
// Sort the array and read the first or last element
// Use Math.min() or Math.max()
// Write a home made function

// Find Min or Max with sort()
// After you have sorted an array, you can use the index to obtain the highest and
// lowest values.

// Sort Ascending:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return a-b;
// });
// console.log(points[0]); //Lowest value
// console.log(points[points.length-1]); //Highest value
// Output:
// 1
// 100


// Sort Descending:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return b-a;
// });
// console.log(points[0]); //Highest value
// console.log(points[points.length-1]); //Lowest value
// Output:
// 100
// 1

// Note:
// Sorting a whole array is a very inefficient method if you only want to find the
// highest (or lowest) value.


// Using Math.max() on an Array:
// You can use Math.max.apply to find the highest number in an array:

// const points = [40, 100, 1, 5, 25, 10];
// let a=myArrayMax(points);
// function myArrayMax(arr){
//     return Math.max.apply(null,arr);
// }
// console.log(a);
// Output: 100


// const points = [40, 100, 1, 5, 25, 10];
// let a=myArrayMin(points);
// function myArrayMin(arr){
//     return Math.min.apply(null,arr);
// }
// console.log(a);
// Output: 1


// JavaScript Array Minimum Method:
// There is no built-in function for finding the lowest value in a JavaScript array.
// The fastest code to find the lowest number is to use a home made method.
// This function loops through an array comparing each value with the lowest value
// found.

// const points = [40, 100, 1, 5, 25, 10];
// let a = myArrayMin(points);
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//         min = arr[len];
//     }
//   }
//   return min;
// }
// console.log(a);
// Output: 1


// JavaScript Array Maximum Method:
// There is no built-in function for finding the highest value in a JavaScript array.
// The fastest code to find the highest number is to use a home made method.
// This function loops through an array comparing each value with the highest value
// found.

// const points = [40, 100, 1, 5, 25, 10];
// let a = myArrayMax(points);
// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }
// console.log(a);
// Output: 100


// Sorting Object Arrays:
// JavaScript arrays often contain objects.

// Sorting based on year:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// console.log("Before Sorting:");
// console.log(cars);
// cars.sort(function (a, b) {
//     return a.year - b.year;
// });
// console.log("After Sorting:");
// console.log(cars);
// Output:
// Before Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
// After Sorting:
// [
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Volvo', year: 2016 }
// ]

// Upor er code er output theke amra dekhte pacchi, cars array sorting er age ja
// chilo, sorting er por ta nai. Change hoye geche. But amra jodi chai cars array ke
// change na koreo cars array ke sorting korbo tahole amra toSorted() method apply
// korbo. toSorted() method onno 1 ta array te cars array ke sorting kore store korbe.

// See more about toSorted() on 24_Array_toSorted.js

// Sorting based on year:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// console.log("Before Sorting:");
// console.log(cars);
// cars.sort(function (a, b) {
//     return b.year - a.year;
// });
// console.log("After Sorting:");
// console.log(cars);
// Output:
// Before Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
// After Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Saab', year: 2001 }
// ]


// Even if objects have properties of different data types, the sort() method can be
// used to sort the array.
// The solution is to write a compare function to compare the property values.

// Sorting based on type:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// console.log("Before Sorting:");
// console.log(cars);
// cars.sort(function (a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return -1; }
//     if (x > y) { return 1; }
//     return 0;
// });
// console.log("After Sorting:");
// console.log(cars);
// Output:
// Before Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
// After Sorting:
// [
//   { type: 'BMW', year: 2010 },
//   { type: 'Saab', year: 2001 },
//   { type: 'Volvo', year: 2016 }
// ]


// Sorting based on type:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// console.log("Before Sorting:");
// console.log(cars);
// cars.sort(function (a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return 1; }
//     if (x > y) { return -1; }
//     return 0;
// });
// console.log("After Sorting:");
// console.log(cars);
// Output:
// Before Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
// After Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]

