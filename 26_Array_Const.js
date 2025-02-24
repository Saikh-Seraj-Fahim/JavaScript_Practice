// JavaScript Array Const

// ECMAScript 2015 (ES6)
// In 2015, JavaScript introduced an important new keyword: const.
// It has become a common practice to declare arrays using const:

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// Output:[ 'Saab', 'Volvo', 'BMW' ]

// Cannot be Reassigned
// An array declared with const cannot be reassigned:

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; // ERROR
// TypeError: Assignment to constant variable.

// Arrays are Not Constants
// The keyword const is a little misleading.
// It does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.

// Elements Can be Reassigned
// You can change the elements of a constant array:

// You can create a constant array:

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota"; // You can change an element:
// cars.push("Audi"); // You can add an element.
// console.log(cars);
// Output:[ 'Toyota', 'Volvo', 'BMW', 'Audi' ]

// Assigned when Declared
// JavaScript const variables must be assigned a value when they are declared:
// Meaning: An array declared with const must be initialized when it is declared.
// Using const without initializing the array is a syntax error:
// This will not work:

// const cars;
// cars = ["Saab", "Volvo", "BMW"];
// SyntaxError: Missing initializer in const declaration

// Arrays declared with var can be initialized at any time.
// You can even use the array before it is declared:
// This is OK:

// cars = ["Saab", "Volvo", "BMW"];
// var cars;
// console.log(cars[0]);
// console.log(cars);
// Output:
// Saab
// [ 'Saab', 'Volvo', 'BMW' ]

// var cars;
// cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// console.log(cars);
// Output:
// Saab
// [ 'Saab', 'Volvo', 'BMW' ]

// Const Block Scope
// An array declared with const has Block Scope.
// An array declared in a block is not the same as an array declared outside the block.

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// {
//     const cars = ["Toyota", "Volvo", "BMW"];
//     console.log(cars[0]);
// }
// console.log(cars[0]);
// Output:
// Saab
// Toyota
// Saab

// An array declared with var does not have block scope:

// var cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// {
//     var cars = ["Toyota", "Volvo", "BMW"];
//     console.log(cars[0]);
// }
// console.log(cars[0]);
// Output:
// Saab
// Toyota
// Toyota


// Redeclaring Arrays

// Redeclaring an array declared with var is allowed anywhere in a program.
// var cars = ["Volvo", "BMW"];   // Allowed
// var cars = ["Toyota", "BMW"];  // Allowed
// cars = ["Volvo", "Saab"];      // Allowed

// Redeclaring or reassigning an array to const, in the same scope, or in the same 
// block, is not allowed.

// var cars = ["Volvo", "BMW"];     // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// {
//     var cars = ["Volvo", "BMW"];   // Allowed
//     const cars = ["Volvo", "BMW"]; // Not allowed
// }

// Redeclaring or reassigning an existing const array, in the same scope, or in the 
// same block, is not allowed.

// const cars = ["Volvo", "BMW"];   // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// var cars = ["Volvo", "BMW"];     // Not allowed
// cars = ["Volvo", "BMW"];         // Not allowed
// {
//     const cars = ["Volvo", "BMW"]; // Allowed
//     const cars = ["Volvo", "BMW"]; // Not allowed
//     var cars = ["Volvo", "BMW"];   // Not allowed
//     cars = ["Volvo", "BMW"];       // Not allowed
// }

// Redeclaring an array with const, in another scope, or in another block, is allowed.

// const cars = ["Volvo", "BMW"];   // Allowed
// {
//     const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//     const cars = ["Volvo", "BMW"]; // Allowed
// }







