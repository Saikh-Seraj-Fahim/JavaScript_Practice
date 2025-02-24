// Source-LWS + W3 Schools.

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A map has a property that represents the size of the map.

// Set er sathe mil ache array er.but difference hocche set e sudhu unique value thake.
// ar array te jekono value thake.
// Map er sathe mil ache object er.2 ta tei key-value pair thake. but difference hocche
// object er key er datatype string hoi.ar map er key jekono datatype er hobe.


// const person={
//     firstName:"Sumit",
//     lastName:"Saha"
// };
// console.log(person["firstName"]);
// Output: Sumit
// Ekhan e firstName key er datatype string.


// Map er sathe object er ar 1 ta difference hocche object er key gular kono order 
// thake na. but map er key gular 1 ta order thake. Map er key gula jei order e insert
// kora hoi, memory te sei order e store kora thake.


// How to Create a Map?
// You can create a JavaScript Map by:
// (1)Passing an Array to new Map()
// (2)Create a Map and use Map.set()


// const fruits = new Map([
//     ["bananas", 300],
//     ["apples", 500],
//     ["oranges", 200]
// ]);
// console.log(fruits);
// Output: Map(3) { 'bananas' => 300, 'apples' => 500, 'oranges' => 200 }


// const fruits = new Map();
// // Set Map Values
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// console.log(fruits);
// Output: Map(3) { 'bananas' => 300, 'apples' => 500, 'oranges' => 200 }


// const fruits = new Map();
// fruits.set(10,300);
// fruits.set("apples", 500);
// fruits.set(50,200);
// console.log(fruits);
// Output: Map(3) { 10 => 300, 'apples' => 500, 50 => 200 }
// Key jekono data type er hote pare.


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// fruits.set("bananas", 400);
// console.log(fruits);
// Output: Map(3) { 'bananas' => 400, 'apples' => 500, 'oranges' => 200 }


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// let a=fruits.get("bananas");
// console.log(a);
// console.log(fruits.size);
// Output: 
// 300
// 3
// The get() method gets the value of a key in a Map.
// The size property returns the number of elements in a map.


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// console.log(fruits);
// fruits.delete("apples");
// console.log(fruits);
// console.log(fruits.size);
// Output:
// Map(3) { 'bananas' => 300, 'apples' => 500, 'oranges' => 200 }
// Map(2) { 'bananas' => 300, 'oranges' => 200 }
// 2


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// fruits.clear();
// console.log(fruits);
// console.log("Size = " + fruits.size);
// Output:
// Map(0) {}
// Size = 0


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// console.log(fruits.has("oranges"));
// fruits.delete("oranges");
// console.log(fruits.has("oranges"));
// Output:
// true
// false
// The has() method returns true if a key exists in a map.


// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// console.log(typeof fruits);
// console.log(fruits instanceof Map);
// Output:
// object
// true


// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:
//         Object	                                Map
// Not directly iterable	                Directly iterable
// Do not have a size property	            Have a size property
// Keys must be Strings (or Symbols)	    Keys can be any data type
// Keys are not well ordered	            Keys are ordered by insertion
// Have default keys	                    Do not have default keys




// In Map.prototype.forEach, the first parameter is always the value and the 
// second parameter is the key. (Source-Chat GPT)

// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// let text1 = "";
// fruits.forEach(function (value, key) 
// {
//     text1 = text1 + key + "->" + value + "\n";
// })
// console.log(text1);

// let text2 = "";
// fruits.forEach(function (key, value) 
// {
//     text2 = text2 + key + "->" + value + "\n";
// })
// console.log(text2);
// Output:
// bananas->300
// apples->500 
// oranges->200

// 300->bananas
// 500->apples 
// 200->oranges

// The forEach() method invokes a callback for each key/value pair in a map.


// Map.keys()
// The keys() method returns an iterator object with the keys in a map.
// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// let myIterator=fruits.keys();
// console.log(myIterator);
// for (let x of myIterator) 
// {
//     console.log(x);
// }
// Output:
// [Map Iterator] { 'bananas', 'apples', 'oranges' }
// bananas
// apples
// oranges



// Map.values()
// The values() method returns an iterator object with the values in a map.
// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// let myIterator=fruits.values();
// console.log(myIterator);
// for (let x of myIterator) 
// {
//     console.log(x);
// }
// Output:
// [Map Iterator] { 300, 500, 200 }
// 300
// 500
// 200



// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a map.
// const fruits = new Map();
// fruits.set("bananas", 300);
// fruits.set("apples", 500);
// fruits.set("oranges", 200);
// let myIterator=fruits.entries();
// console.log(myIterator);
// for (let x of myIterator) 
// {
//     console.log(x);
// }
// Output:
// [Map Entries] {      
//     [ 'bananas', 300 ],
//     [ 'apples', 500 ], 
//     [ 'oranges', 200 ] 
//   }
//   [ 'bananas', 300 ]
//   [ 'apples', 500 ] 
//   [ 'oranges', 200 ]



// Objects as Keys
// Being able to use objects as keys is an important Map feature.

const apples = {
    name: 'Apples',
    quantity: 12
};
const bananas = {
    name: 'Bananas'
};
const oranges = {
    name: 'Oranges'
};
const fruits = new Map();
// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits.get(apples));
console.log(fruits);
// Output:
// 500
// Map(3) {
//   { name: 'Apples', quantity: 12 } => 500,
//   { name: 'Bananas' } => 300,
//   { name: 'Oranges' } => 200
// }

// Remember: The key is an object (apples), not a string ("apples").



// This should be reviewed later.
// const fruits = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ];

// // Callback function to select low volumes
// function myCallback({ quantity })
// {
//     return quantity > 200 ? "ok" : "low";
// }

// // Group by ok and low
// const result = Map.groupBy(fruits, myCallback);

// // Display Results
// let text = "These fruits are Ok: ";
// for (let x of result.get("ok"))
// {
//     text += x.name + " " + x.quantity + "\n";
// }
// text += "These fruits are low: ";
// for (let x of result.get("low"))
// {
//     text += x.name + " " + x.quantity + "\n";
// }
// console.log(text);
// console.log(result.get("ok"));