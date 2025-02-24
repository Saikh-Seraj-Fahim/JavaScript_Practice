// Source-GFG

// 1. Creating an Array using Array Literal

// Creating an Empty Array
// let names=[];
// console.log(names);
// // Creating an Array and Initializing with Values
// let courses=["HTML","CSS","Javascript","React"];
// console.log(courses);
// Output:
// []
// [ 'HTML', 'CSS', 'Javascript', 'React' ]


// 2. Creating an Array using JavaScript new Keyword (Array Constructor)

// Creating and Initializing an array with values
// let courses=new Array("HTML","CSS","Javascript","React");
// console.log(courses);
// Output: [ 'HTML', 'CSS', 'Javascript', 'React' ]


// Basic Operations on JavaScript Arrays

// 1. Accessing Elements of an Array

// let courses=["HTML","CSS","Javascript","React"];
// console.log(courses[0]);
// console.log(courses[1]);
// Output:
// HTML
// CSS


// 2. Accessing the First Element of an Array

// let courses=["HTML","CSS","JavaScript","React"];
// let firstItem = courses[0];
// console.log("First Item:", firstItem);
// Output: 
// First Item: HTML


// 3. Accessing the Last Element of an Array

// let courses=["HTML","CSS","JavaScript","React"];
// let lastItem = courses[courses.length-1];
// console.log("Last Item:",lastItem);
// Output:
// Last Item: React


// 4. Modifying the Array Elements
// let courses=["HTML","CSS","Javascript","React"];
// console.log(courses);
// courses[1]="Bootstrap";
// console.log(courses);
// Output:
// [ 'HTML', 'CSS', 'Javascript', 'React' ]
// [ 'HTML', 'Bootstrap', 'Javascript', 'React' ]


// 5. Adding Elements to the Array

// let courses=["HTML","CSS","Javascript","React"];
// courses.push("Node.js"); // Add Element to the end of Array
// courses.unshift("Web Development"); // Add Element to the beginning
// console.log(courses);
// Output:
// [ 'Web Development', 'HTML', 'CSS', 'Javascript', 'React', 'Node.js' ]


// 6. Removing Elements from an Array

let courses=["HTML","CSS","Javascript","React","Node.js"];
console.log("Original Array:"+courses);
courses.pop(); // Removes the last element
console.log("After Removing the last element:"+courses);
courses.shift(); // Removes the first element
console.log("After Removing the first element:"+courses);
courses.splice(1,2); // Removes 2 elements starting from index 1
console.log("After Removing 2 elements starting from index 1:"+courses);

// Output:
// Original Array:HTML,CSS,Javascript,React,Node.js
// After Removing the last element:HTML,CSS,Javascript,React
// After Removing the first element:CSS,Javascript,React    
// After Removing 2 elements starting from index 1:CSS


// 7. Array Length

// let courses=["HTML","CSS","Javascript","React","Node.js"];
// let len=courses.length;
// console.log("Array Length:"+len);
// Array Length:5


// 8. Increase and Decrease the Array Length

// let courses=["HTML","CSS","Javascript","React","Node.js"];
// courses.length=7; // Increase the array length to 7
// console.log("Array After Increasing the Length:",courses);
// courses.length=2; // Decrease the array length to 2
// console.log("Array After Decreasing the Length:",courses)
// Output:
// Array After Increasing the Length: [ 'HTML', 'CSS', 'Javascript', 'React', 
// 'Node.js', <2 empty items> ]
// Array After Decreasing the Length: [ 'HTML', 'CSS' ]


// 9. Iterating Through Array Elements

// Iterating through for loop
// let courses=["HTML","CSS","JavaScript","React"];
// for (let i=0;i<courses.length;i++) 
// {
//     console.log(courses[i])
// }
// Output:
// HTML
// CSS
// JavaScript
// React


// Iterating through forEach loop

// let courses=["HTML","CSS","JavaScript","React"];
// courses.forEach(function myfunc(elements) 
// {
//     console.log(elements);
// });
// Output:
// HTML
// CSS
// JavaScript
// React


// 10. Array Concatenation

// let courses=["HTML","CSS","JavaScript","React"];
// let otherCourses=["Node.js","Expess.js"];
// let concateArray = courses.concat(otherCourses); // Concatenate both arrays
// console.log("Concatenated Array: ", concateArray);
//Output: 
//Concatenated Array:  [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Expess.js' ]


// 11. Conversion of an Array to String

// let courses=["HTML","CSS","JavaScript","React"];
// console.log(courses.toString()); // Convert array to String
// Output: HTML,CSS,JavaScript,React


// 12. Check the Type of an Array

// let courses=["HTML","CSS","JavaScript","React"];
// console.log(typeof courses); // Check type of array
// Output: object


// Recognizing a JavaScript Array:
// There are two methods by which we can recognize a JavaScript array:
// By using Array.isArray() method
// By using instanceof method 

// const courses=["HTML","CSS","Javascript"];
// console.log("Using Array.isArray() method:",Array.isArray(courses))
// console.log("Using instanceof method:",courses instanceof Array)
// Output:
// Using Array.isArray() method: true
// Using instanceof method: true


// Note: A common error is faced while writing the arrays:
// const numbers = [5] and
// const numbers = new Array(5)
// The above two statements are not the same.


// const numbers=[5]
// console.log(numbers)
// Output: [ 5 ]


// const numbers=new Array(5)
// console.log(numbers)
// Output: [ <5 empty items> ]

