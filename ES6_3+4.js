// Source-LWS

// 3-Truthy or falsy values

// var myVar = true;
// if (myVar)  // if(myVar===true)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am truthy

// var myVar = true;
// if (!myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am falsy

// var myVar = false;
// if (!myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am truthy

// var myVar = "";
// if (myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am falsy

// var myVar = "abc";
// if (myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am truthy

// var myVar = null;
// if (myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am falsy

// var myVar = [];
// if (myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am truthy

// var myVar = [4, 8, 3];
// if (myVar)
//     console.log("I am truthy");
// else
//     console.log("I am falsy");
// Output: I am truthy


// false, 0, "", null, undefined, NaN ei 6 ta kono variable e thakle sei variable er 
// value false. Mane ei 6 ta falsy value. Baki sob khetre true.




// 4-Ternary Operator

// var age = 18;
// var type;
// if (age >= 18)
//     type = "adult";
// else
//     type = "child";
// console.log(type);
// Output: adult

// var age = 18;
// var type = (age >= 18) ? "adult" : "child";
// console.log(type);
// Output: adult

// var age = 12;
// var type;
// if (age >= 18)
//     type = "adult";
// else
// {
//     if (age < 10)
//         type = "child";
//     else
//         type = "young";
// }
// console.log(type);
// Output: young

// The above code can be written in a single line as follows:

// var age = 12;
// var type = (age >= 18) ? "adult" : (age < 10) ? "child" : "young";
// console.log(type);
// young

// var a = 5;
// var access = a > 5;
// console.log(access);
// Output: false

// var a = 6;
// var access = a > 5;
// console.log(access);
// Output: true