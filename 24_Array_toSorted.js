// sort() method changes the original array.
// But toSorted() method does not change the original array.

// JavaScript Array toSorted() Method:
// ES2023 added the toSorted() method as a safe way to sort an array without altering
// the original array.The difference between toSorted() and sort() is that the first
// method creates a new array, keeping the original array unchanged, while the last
// method alters the original array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.toSorted();
// console.log(result);
// console.log(fruits);
// Output:
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]


// const points = [40, 100, 1, 5, 25, 10];
// const result = points.toSorted();
// console.log(result);
// console.log(points);
// Output:
// [ 1, 10, 100, 25, 40, 5 ]
// [ 40, 100, 1, 5, 25, 10 ]
// This is sorted alphabetically. How to sort numerically it is shown below.

// Numeric Sort:
// By default, the toSorted() function sorts values as strings (alphabetically).
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger
// than "1". Because of this, the toSorted() method will produce incorrect result when
// sorting numbers. You can fix this by providing a compare function.


// const points = [40, 100, 1, 5, 25, 10];
// const result = points.toSorted(function (a, b) {
//     return a - b;
// });
// console.log(result);
// console.log(points);
// Output:
// [ 1, 5, 10, 25, 40, 100 ]
// [ 40, 100, 1, 5, 25, 10 ]


// Use the same trick to sort an array descending:

// const points = [40, 100, 1, 5, 25, 10];
// const result = points.toSorted(function (a, b) {
//     return b - a;
// });
// console.log(result);
// console.log(points);
// Output:
// [ 100, 40, 25, 10, 5, 1 ]
// [ 40, 100, 1, 5, 25, 10 ]


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
// const result = points.toSorted(function (a, b) {
//     return a - b;
// });
// console.log(result[0]); //Lowest value
// console.log(result[result.length - 1]); //Highest value
// Output:
// 1
// 100


// Sort Descending:

// const points = [40, 100, 1, 5, 25, 10];
// const result = points.toSorted(function (a, b) {
//     return b - a;
// });
// console.log(result[0]); //Highest value
// console.log(result[result.length - 1]); //Lowest value
// Output:
// 100
// 1

// Note:
// Sorting a whole array is a very inefficient method if you only want to find the
// highest (or lowest) value.


// Sorting Object Arrays:
// JavaScript arrays often contain objects.

// Sorting based on year:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// const result = cars.toSorted(function (a, b) {
//     return a.year - b.year;
// });
// console.log("After Sorting:");
// console.log(result);
// console.log(cars);
// Output:
// After Sorting:
// [
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Volvo', year: 2016 }
// ]
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]


// Sorting based on year:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// const result = cars.toSorted(function (a, b) {
//     return b.year - a.year;
// });
// console.log("After Sorting:");
// console.log(result);
// console.log(cars);
// Output:
// After Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Saab', year: 2001 }
// ]
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]


// Sorting based on type:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// const result = cars.toSorted(function (a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return -1; }
//     if (x > y) { return 1; }
//     return 0;
// });
// console.log("After Sorting:");
// console.log(result);
// console.log(cars);
// Output:
// After Sorting:
// [
//   { type: 'BMW', year: 2010 },
//   { type: 'Saab', year: 2001 },
//   { type: 'Volvo', year: 2016 }
// ]
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]


// Sorting based on type:

// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// const result = cars.toSorted(function (a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return 1; }
//     if (x > y) { return -1; }
//     return 0;
// });
// console.log("After Sorting:");
// console.log(result);
// console.log(cars);
// Output:
// After Sorting:
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
// [
//   { type: 'Volvo', year: 2016 },
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 }
// ]
