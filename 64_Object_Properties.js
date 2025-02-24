// Source-LWS

// Property order doesn't matter.So here, age can come before name.
// const person={
//     name:"Fahim",
//     age:26
// };
// person.country="Bangladesh"; // adding new property
// console.log(person);
// Output: { name: 'Fahim', age: 26, country: 'Bangladesh' }


// const person={
//     name:"Fahim",
//     age:26
// };
// person.country="Bangladesh"; // adding new property
// console.log(person.age);
// console.log(person["age"]);
// let x="age";
// console.log(person[x]);
// Output:
// 26
// 26
// 26


// const person = {
//     fname:"John", 
//     lname:"Doe", 
//     age:25
// }; 
// for (let x in person) 
// {
//     console.log(x);
// }
// Output:
// fname
// lname
// age


// const person = {
//     fname:"John", 
//     lname:"Doe", 
//     age:25
// }; 
// let text = "";
// for (let x in person) 
// {
//     text=text+person[x]+" "; //text += person[x] + " ";
// }
// console.log(text);
// Output: John Doe 25


// Deleting a property
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };
// delete person.age; // delete person["age"];
// console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', eyeColor: 'blue' }


// Nested Objects
// const myObj = {
//     name: "John",
//     age: 30,
//     myCars: {
//       car1: "Ford",
//       car2: "BMW",
//       car3: "Fiat"
//     }
// }
// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car2"]);
// console.log(myObj["myCars"]["car2"]);
// let p1 = "myCars";
// let p2 = "car2";
// console.log(myObj[p1][p2]);
// Output:
// BMW
// BMW
// BMW
// BMW


// Nested Arrays and Objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
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


// Prototype Properties:
// JavaScript objects inherit the properties of their prototype.
// The delete keyword does not delete inherited properties, but if you delete a 
// prototype property, it will affect all objects inherited from the prototype.