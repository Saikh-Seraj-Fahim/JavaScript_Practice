// Source-LWS

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case 
// first letter.

// function Person(first, last, age) // constructor function
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const sumit=new Person("Sumit","Saha",35);
// const jasim=new Person("Jasim","Uddin",30);
// const rahim=new Person("Rahim","Islam",32);
// console.log(sumit.fullName());
// console.log(jasim.fullName());
// console.log(sumit);

// Output:
// Sumit Saha
// Jasim Uddin
// Person {
//   firstName: 'Sumit',
//   lastName: 'Saha',
//   age: 35,
//   fullName: [Function (anonymous)]
// }



// function Person(first, last, age) // constructor function
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const sumit=new Person("Sumit","Saha",35);
// const jasim=new Person("Jasim","Uddin",30);
// const rahim=new Person("Rahim","Islam",32);
// sumit.country="Bangladesh";
// console.log(sumit);
// console.log(jasim);

// Output:
// Person {
//     firstName: 'Sumit',
//     lastName: 'Saha',
//     age: 35,
//     fullName: [Function (anonymous)],
//     country: 'Bangladesh'
//   }
//   Person {
//     firstName: 'Jasim',
//     lastName: 'Uddin',
//     age: 30,
//     fullName: [Function (anonymous)]
//   }



// Adding a Property to a Constructor

// function Person(first, last, age, eye) 
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// Person.prototype.nationality = "English"; // Add a new Property
// console.log("The nationality of my father is " + myFather.nationality);
// console.log("The nationality of my mother is " + myMother.nationality);

// Output:
// The nationality of my father is English
// The nationality of my mother is English

// When an object calls a property,first it finds that property in the constructor 
// function.If the property is found in the constructor function then it is ok. But if
// the property is not found in the constructor function, then prototype is checked to
// find that property.

// All JavaScript objects inherit properties and methods from a prototype.
// Java is an Object Oriented language. But JavaScript is a prototype based language.



// Adding a Method to an Object

// function Person(first, last, age, eye) 
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// myMother.changeName = function (name) 
// {
//     this.lastName = name;
// }
// myMother.changeName("Doe");
// console.log("My mother's last name is " + myMother.lastName);

// Output: My mother's last name is Doe



// We cannot add a new method to an object constructor function.
// Adding a new method must be done to the constructor function prototype:

function Person(firstName, lastName, age, eyeColor) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}
const myMother = new Person("Sally", "Rally", 48, "green");
const myFather = new Person("John", "Doe", 50, "blue");
Person.prototype.changeName = function (name) 
{
    this.lastName = name;
}
myMother.changeName("Doe");
myFather.changeName("Haris");
console.log("My mother's last name is " + myMother.lastName);
console.log("My father's last name is " + myFather.lastName);

// Output:
// My mother's last name is Doe
// My father's last name is Haris



// Built-in JavaScript Constructors:
// JavaScript has built-in constructors for all native objects:
// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object

// Note:
// The Math() object is not in the list. Math is a global object. The new keyword 
// cannot be used on Math.

// Did You Know?
// Use object literals {} instead of new Object().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().



// String.prototype.doingFun=function()
// {
//     return "I am doing fun!";
// }
// const x="Bangladesh";
// console.log(x.doingFun());
// Output: I am doing fun!

// Here,we are adding a function to a built in String constructor. So,the string 
// variable x can use this function.But this is prohibited.

// Note:
// Only modify your own prototypes. Never modify the prototypes of standard 
// JavaScript objects.


