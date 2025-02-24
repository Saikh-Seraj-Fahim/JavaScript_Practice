// Source-LWS

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// Output: [ 'Saab', 'Volvo', 'BMW' ]


// Spaces and line breaks are not important. A declaration can span multiple lines:
// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
// ];
// console.log(cars);
// Output: [ 'Saab', 'Volvo', 'BMW' ]


// You can also create an array, and then provide the elements:
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// console.log(cars);
// Output: [ 'Saab', 'Volvo', 'BMW' ]


// Using the JavaScript Keyword new
// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);
// Output: [ 'Saab', 'Volvo', 'BMW' ]


// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.


// Accessing Array Elements:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// Output:
// Saab
// Volvo
// BMW


// Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element.


// Changing an Array Element
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// console.log(cars);
// Output: [ 'Opel', 'Volvo', 'BMW' ]


// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated)
// array values.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// Output: Banana,Orange,Apple,Mango


// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// console.log(typeof cars);
// Output: 
// [ 'Saab', 'Volvo', 'BMW' ]
// object

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns 
// "object" for arrays.


// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have 
// arrays in an Array:
// myArray[0] = Date.now; // object
// myArray[1] = myFunction; // function
// myArray[2] = myCars; // array


// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods.

// const cars = ["Saab", "Volvo", "BMW"];
// let len=cars.length;
// console.log(len);
// cars.sort();
// console.log(cars);
// Output:
// 3
// [ 'BMW', 'Saab', 'Volvo' ]


// Accessing the First and Last Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[4]="Pineapple";
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);
// Output:
// Banana
// Pineapple



// Looping Array Elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for(let i=0; i<fruits.length; ++i)
// {
//     console.log(fruits[i]);
// }
// Output:
// Banana
// Orange
// Apple
// Mango


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach(function (value)
// {
//     console.log(value);
// })
// Output:
// Banana
// Orange
// Apple
// Mango


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach(myFunction);
// function myFunction(value) 
// {
//     console.log(value);
// } 
// Output:
// Banana
// Orange
// Apple
// Mango


// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method.

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits);
// fruits.push("Lemon");
// console.log(fruits);
// Output:
// [ 'Banana', 'Orange', 'Apple' ]
// [ 'Banana', 'Orange', 'Apple', 'Lemon' ]


// New element can also be added to an array using the length property.

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits);
// fruits[fruits.length] = "Lemon";
// console.log(fruits);
// Output:
// [ 'Banana', 'Orange', 'Apple' ]
// [ 'Banana', 'Orange', 'Apple', 'Lemon' ]


// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array.
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";
// let fLen = fruits.length;
// for (i = 0; i < fLen; i++) 
// {
//     console.log(fruits[i]);
// }
// Output:
// Banana
// Orange
// Apple
// undefined
// undefined
// undefined
// Lemon


// Associative Arrays:
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// console.log(person.length);
// console.log(person[0]);
// console.log(person);
// Output:
// 3
// John
// [ 'John', 'Doe', 46 ]


// WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46; 
// console.log(person.length);
// console.log(person[0]);
// console.log(person);
// Output:
// 0
// undefined
// [ firstName: 'John', lastName: 'Doe', age: 46 ]


// The Difference Between Arrays and Objects:
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.


// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.


// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().
// But you can safely use [] instead.

// These two different statements both create a new empty array named points:
// const points = new Array();
// const points = [];

// These two different statements both create a new array containing 6 numbers:
// const points = new Array(40, 100, 1, 5, 25, 10);
// const points = [40, 100, 1, 5, 25, 10];

// The new keyword can produce some unexpected results:
// // Create an array with three elements:
// const points = new Array(40, 100, 1);
// // Create an array with two elements:
// const points = new Array(40, 100);
// // Create an array with one element ??? No.
// const points = new Array(40);  

// A Common Error
// const points = [40];
// is not the same as:
// const points = new Array(40);

// // Create an array with one element:
// const points = [40];
// console.log(points);
// Output: [ 40 ]

// // Create an array with 40 undefined elements:
// const points = new Array(40);
// console.log(points);
// Output: [ <40 empty items> ]


// How to Recognize an Array
// A common question is: How do I know if a variable is an array?
// The problem is that the JavaScript operator typeof returns "object".
// The typeof operator returns object because a JavaScript array is an object.

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(typeof fruits);
// Output: object

// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method 
// Array.isArray().

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(Array.isArray(fruits));
// Output: true

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor.

// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits instanceof Array);
// Output: true


// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects.

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};
for (let i in myObj.cars) 
{
    console.log("Car Name:" + myObj.cars[i].name);
    console.log("Models:");
    for (let j in myObj.cars[i].models) 
    {
        console.log(myObj.cars[i].models[j]);
    }
}
// Output:
// Car Name:Ford
// Models:     
// Fiesta      
// Focus       
// Mustang     
// Car Name:BMW
// Models:     
// 320
// X3
// X5
// Car Name:Fiat
// Models:
// 500
// Panda