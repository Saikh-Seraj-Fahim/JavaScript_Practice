// Source-LWS

// ECMAScript 5 (ES5 2009) introduced Getter and Setters.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() 
//     {
//         return this.language;
//     }
// };
// console.log(person.lang);
// Output: en


// getter er moddhe kichu 1 ta thake.and amra seta ke niye jai call kore.
// jamon upor er getter er example theke amra language niye jacchi.
// but setter er maddhom e amra object er kono 1 ta property ke set kori.


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get fullName() // this is getter
//     {
//         return this.firstName+" "+this.lastName;
//     }
// };
// console.log(person.fullName);
// Output: John Doe


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) // this is setter
//     {
//         this.language=lang;
//     }
// };
// person.lang="bn";
// console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', language: 'bn', lang: [Setter] }



// JavaScript Function or Getter?
// What is the differences between these two examples?
// Example 1
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());
// Output: John Doe


// Example 2
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName);
// Output: John Doe


// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes
// Also it takes less memory


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() 
//     {
//       return this.language.toUpperCase();
//     }
// };
// console.log(person.lang);
// Output: EN


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) 
//     {
//         this.language = lang.toUpperCase();
//     }
// };
// person.lang = "en";
// console.log(person.language);
// Output: EN


// If we want to add setter and getter method outside the object, we use 
// Object.defineProperty()


// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };
// Object.defineProperty(person,"fullName",{
//     get:function()
//     {
//         return this.firstName+" "+this.lastName;
//     }
// });
// console.log(person.fullName);
// Output: John Doe



// const obj = {
//     counter: 0
// };
// // Define setters and getters
// Object.defineProperty(obj, "reset", {
//     get: function () 
//     {
//         this.counter = 0;
//     }
// });
// Object.defineProperty(obj, "increment", {
//     get: function () 
//     {
//         this.counter++;
//     }
// });
// Object.defineProperty(obj, "decrement", {
//     get: function () 
//     {
//         this.counter--;
//     }
// });
// Object.defineProperty(obj, "add", {
//     set: function (value) 
//     { 
//         this.counter = this.counter+value; 
//     }
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) 
//     { 
//         this.counter = this.counter-value; 
//     }
// });
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;

// console.log(obj.counter);
// Output: 4













