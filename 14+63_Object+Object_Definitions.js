// Source-LWS

// Serial-14

// This method of creating objects is called object literals.
// const car={
//     name:"Fiam",
//     model:500,
//     weight:"850 kg",
//     color:"white",
//     start:function(){ //method
//         console.log("Car has started");
//     },
//     drive:function(){ //method
//         console.log("Car is driving");
//     }
// };
// console.log(car.weight)
// console.log(car['weight'])
// console.log(car["weight"])
// car.start()
// Output:
// 850 kg
// 850 kg
// 850 kg
// Car has started


const car={
    name:"Fiam",
    model:500,
    weight:"850 kg",
    color:"white",
    start:function(){ //method
        this.drive();
        console.log("Car has started");
    },
    drive:function(){ //method
        console.log("Car is driving");
    }
};
car.start();
// Output:
// Car is driving
// Car has started


// Do not declare Strings, Numbers and Booleans as objects

// let x=5;
// console.log(typeof x);
// Output: number


// If we declare anything with new keyword, it is created as an object.
// let x=new Number(5);
// console.log(typeof x);
// Output: object



// Serial-63

// Create an empty JavaScript object using {}, and add 4 properties:

// const person={};
// person.firstName="John";
// person.lastName="Doe";
// person.age=50;
// person.eyeColor="blue";
// console.log(person.firstName+" is "+person.age+" years old.");
// Output: John is 50 years old.  



// Create an empty JavaScript object using new Object(), and add 4 properties:

// const person=new Object();
// person.firstName="John";
// person.lastName="Doe";
// person.age=50;
// person.eyeColor="blue";
// console.log(person.firstName+" is "+person.age+" years old.");
// Output: John is 50 years old.


// Note:
// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.


// Create an Object
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
//   };
//   // Create a Copy
//   const x=person;
//   // Change Age
//   x.age=10;
//   console.log(person.firstName+" is "+person.age+" years old.");
// Output: John is 10 years old.