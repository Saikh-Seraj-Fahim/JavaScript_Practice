// Source-LWS + W3 Schools

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// How to Create a Set?
// You can create a JavaScript Set by:
// (1)Passing an array to new Set().
// (2)Create an empty set and use add() to add values.


// const letters = new Set(["c", "b", "a", "b", "c", "d"]);
// console.log(letters);
// Output: Set(4) { 'c', 'b', 'a', 'd' }


// const letters = new Set();
// letters.add("b");
// letters.add("a");
// letters.add("c");
// letters.add("a");
// letters.add("b");
// letters.add("d");
// console.log(letters);
// Output: Set(4) { 'b', 'a', 'c', 'd' }

// The above code can be written as:

// const letters = new Set();
// letters.add("b").add("a").add("c").add("a").add("b").add("d");
// console.log(letters);
// Output: Set(4) { 'b', 'a', 'c', 'd' }

// const letters = new Set();
// const a = "a"; // Create Variables
// const b = "b";
// const c = "c";
// letters.add(a); // Add Variables to the Set
// letters.add(b);
// letters.add(c);
// console.log(letters);
// console.log(typeof letters);
// console.log(letters instanceof Set);
// Output:
// Set(3) { 'a', 'b', 'c' }
// object
// true


// const nums = [1, 2, 3, 4, 5];
// console.log(nums instanceof Set);
// Output: false


// Listing the Elements:
// You can list all Set elements (values) with a for..of loop.

// const letters = new Set(["c", "a", "b", "a", "c", "d"]);
// // List all Elements
// let text = "";
// for (let x of letters) {
//     text = text + x; //text += x;
// }
// console.log(text);
// Output: cabd


// A set can be iterated by for of loop.

// const letters = new Set(["c", "a", "b", "a", "c", "d"]);
// for (let n of letters) {
//     console.log(n);
// }
// Output:
// c
// a
// b
// d


// The has() method returns true if a specified value exists in a set.

// const letters = new Set(["a", "b", "c"]);
// answer1 = letters.has("d");
// console.log(answer1);
// answer2 = letters.has("c");
// console.log(answer2);
// Output:
// false
// true


// const letters = new Set(["a", "b", "c", "b", "a"]);
// // List all entries
// let text = "";
// letters.forEach(function (value) {
//     text = text + value; // text += value;
// })
// console.log(text);
// Output: abc



// The values() method returns an Iterator object with the values in a Set.

// const letters = new Set(["a", "b", "c", "b", "a"]);
// console.log(letters.values());
// Output: [Set Iterator] { 'a', 'b', 'c' }


// const letters = new Set(["c", "a", "b", "a", "c", "d"]);
// const myIterator = letters.values(); // Get all Values
// console.log(myIterator);
// for (let n of myIterator) {
//     console.log(n);
// }
// Output:
// [Set Iterator] { 'c', 'a', 'b', 'd' }
// c
// a
// b
// d



// The keys() Method:
// The keys() method returns an Iterator object with the values in a Set.
// Note:
// A Set has no keys, so keys() returns the same as values().
// This makes Sets compatible with Maps.

// const letters = new Set(["a", "b", "c", "b", "a"]);
// console.log(letters.keys());
// Output: [Set Iterator] { 'a', 'b', 'c' }


// const letters = new Set(["c", "a", "b", "a", "c", "d"]);
// const myIterator = letters.keys();
// console.log(myIterator);
// for (let x of myIterator) {
//     console.log(x);
// }
// Output:
// [Set Iterator] { 'c', 'a', 'b', 'd' }
// c
// a
// b
// d



// The entries() Method:
// The entries() method returns an Iterator with [value,value] pairs from a Set.
// Note:
// The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value].
// This makes Sets compatible with Maps.



// const letters = new Set(["b", "a", "c", "a", "b", "d"]);
// const myIterator = letters.entries(); // Get all Entries
// console.log(myIterator);
// for (let n of myIterator) {
//     console.log(n);
// }
// Output:
// [Set Entries] {
//     [ 'b', 'b' ],
//     [ 'a', 'a' ],
//     [ 'c', 'c' ],
//     [ 'd', 'd' ]
//   }
//   [ 'b', 'b' ]
//   [ 'a', 'a' ]
//   [ 'c', 'c' ]
//   [ 'd', 'd' ]


// const a = {
//     firstName: "Sumit",
//     lastName: "Saha"
// };
// console.log(Object.entries(a));
// Output: [ [ 'firstName', 'Sumit' ], [ 'lastName', 'Saha' ] ]


// const letters = new Set(["a", "b", "c", "b", "a"]);
// console.log(Object.entries(letters));
// Output: [] (Blank Array)


// Object.entries() is a method that returns an array of a given object's own enumerable
// string-keyed property [key, value] pairs. However, Object.entries() works on plain
// objects, not on sets or other collections. Since letters is a Set, not an object,
// calling Object.entries() on it doesn’t yield meaningful results. Set objects don’t
// have enumerable string-keyed properties like regular objects do. Therefore, the
// result will be an empty array, because there are no "entries" in a Set from the
// perspective of Object.entries().

// Explanation Source-Chat GPT.




// 23 - Set & WeakSet - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// let mySet = new Set();
// mySet.add(5).add(6).add("Bangladesh").delete(5);
// console.log(mySet);
// Output: Set(2) { 6, 'Bangladesh' }

// let mySet = new Set();
// mySet.add(5).add(6).add("Bangladesh").clear();
// console.log(mySet);
// Output: Set(0) {}

// let mySet = new Set();
// mySet.add(5).add(6).add("Bangladesh");
// console.log(mySet.size);
// Output: 3

// Converting an array to a Set.

// let myArray = [1, 2, 3];
// let mySet = new Set(myArray);
// console.log(mySet);
// Output: Set(3) { 1, 2, 3 }

// We can pass any iterable in new Set();

// In a set prototype, there has Symbol.iterator. So, set is iterable. So, we can
// iterate a set elements by using for loop or for of loop.

// let myArray = [1, 2, 3];
// let mySet = new Set(myArray);
// for (let a of mySet) {
//     console.log(a);
// }
// Output:
// 1
// 2
// 3


// Converting a set to an array.

// 1st method: (using spread operator)

// let mySet = new Set();
// mySet.add(5).add(6).add("Bangladesh");
// const ar = [...mySet];
// console.log(ar);
// Output: [ 5, 6, 'Bangladesh' ]

// 2nd method: 

// The Array.from() method returns an Array object from any object with a length
// property or any iterable object.

// let mySet = new Set();
// mySet.add(5).add(6).add("Bangladesh");
// const ar = Array.from(mySet);
// console.log(ar);
// Output: [ 5, 6, 'Bangladesh' ]


// let myArray = [1, 2, 3];
// let mySet = new Set(myArray);
// mySet.add({
//     a: 5,
//     b: 2
// });
// mySet.add({
//     a: 5,
//     b: 2
// });
// console.log(mySet);
// Output: Set(5) { 1, 2, 3, { a: 5, b: 2 }, { a: 5, b: 2 } }

// Ei code e set er moddhe 2 ta same object insert kora hocche. Tai output e 1 tai 
// object asar kotha. But output e 2 ta object e asche. Karon evabe nam diye object 
// declare na korle, memory te objet 2 ta alada address e insert hobe. Tai 2 bar e 
// print hobe. Object hocche reference type.

// let myArray = [1, 2, 3];
// let mySet = new Set(myArray);
// let myObj = {
//     a: 5,
//     b: 2
// };
// mySet.add(myObj);
// mySet.add(myObj);
// console.log(mySet);
// Output: Set(4) { 1, 2, 3, { a: 5, b: 2 } }

// Evabe nam diye object declare kore sei object ke set e joto bar e insert kora
// hok na kano, sei object set e just 1 bar e insert hobe.
// Ekhan e myObj ke joto bar e set e insert kori, myObj sudhu 1 bar e set e insert
// hobe. Karon sob myObj er reference ba address same. Ar same jinis set e sudhu 1 bar
// e insert hoi.
// Object hocche reference type.


// Selecting unique elements from an array:
// Array ta ke set e pass kore unique element gula filter hoye galo. Tarpor sei set
// er element gula ke array te convert korar jonno spread operator use kora hoyeche.

// let myArray = [1, 2, 3, 4, 5, 5, 5, 6, 5];
// let unique = [...new Set(myArray)];
// console.log(unique);
// Output: [ 1, 2, 3, 4, 5, 6 ]


// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let union = new Set([...a, ...b]);
// console.log(union);
// Output: Set(4) { 1, 2, 3, 4 }


// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let intersection = new Set([...a].filter(x => b.has(x)));
// console.log(intersection);
// Output: Set(2) { 2, 3 }

// The above code can be written as:

// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let intersection = new Set([...a].filter(function (x) {
//     return b.has(x);
// }));
// console.log(intersection);
// Output: Set(2) { 2, 3 }


// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference);
// Output: Set(1) { 1 }

// The above code can be written as:

// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let intersection = new Set([...a].filter(function (x) {
//     return !b.has(x);
// }));
// console.log(intersection);
// Output: Set(1) { 1 }



// WeakSet

// LWS:

// How to create a WeakSet

// const ws = new WeakSet();
// console.log(ws);
// Output: WeakSet { <items unknown> }

// Set e jekono primitive value add kora jai. But WeakSet e sudhu object add kora jai.
// Object bad e onno kichu add korle console e TypeError dekhabe.

// WeakSet er prototype e Symbol.iterator nai. Tai WeakSet iterable na. Tai for of
// loop diye WeakSet er object gula ke iterate kora jai na.

// const ws = new WeakSet();
// ws.add({ a: 1 });
// console.log(ws);
// Output: WeakSet { <items unknown> }

// const ws = new WeakSet([{ a: 1 }, { b: 2 }]);
// console.log(ws);
// Output: WeakSet { <items unknown> }

// const ws = new WeakSet();
// let x = {
//     a: 1,
//     b: 2
// };
// ws.add(x);
// console.log(ws);
// Output: WeakSet { <items unknown> }

// WeakSet objects cannot be directly logged to see their contents.(source-chatgpt)

// Since WeakSet is not iterable and does not expose its contents, you can't inspect
// it directly. Instead, you can only check if a particular object is present using:
// console.log(ws.has(obj)); // true or false (source-chatgpt)


// const ws = new WeakSet();
// let obj = { a: 1 }; // Object reference
// ws.add(obj); // Add the object reference to WeakSet
// console.log(ws.has(obj)); // true -> Check if obj is in the WeakSet
// obj = null; // Remove the reference to the object
// console.log(ws.has(obj)); // false -> The object is garbage collected, so it's 
// removed from WeakSet
// Output:
// true
// false
// This code is taken from chatgpt.


// From geeksforgeeks:
// JavaScript WeakSet is similar to Set (Does not hold duplicates) with the following
// differences:
// (1)Stores by weak reference. That is, if an object is not referenced by anything
// else, it would be cleaned from the WeakSet.
// (2)Allows only Objects and Symbols to be stored.

// let ws = new WeakSet();
// let obj1 = {};
// let obj2 = {};
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws.has(obj2));
// ws.delete(obj2);
// console.log(ws.has(obj2));
// Output:
// true
// false

// A WeakSet is a collection of objects, where each object can only appear once. It
// holds “weak” references to the objects, meaning if there are no other references to
// an object, it can be garbage collected.

// WeakSet e sudhu 3 ta function support kore. add(), delete(), has().


// LWS:

// class myClass {
//     myMethod() {
//         return "I am method";
//     }
// }
// const a = new myClass();
// console.log(a.myMethod());
// console.log(myClass.prototype.myMethod());
// Output:
// I am method
// I am method

// Upor er code e class er moddhe jei function ta ache sei function ke 2 vabe call
// kora dekhano hoyeche. Firstly, oi class er object toiri kore sei object er maddhom
// e function ta ke call deoa. Secondly, oi class er prototype er maddhom e function
// ta ke call deoa.
// Akhon amra jodi chai class er prototype er maddhom e function ta ke call deoa jabe
// na, sudhu class er object toiri kore sei object er maddhom ei function ta ke call
// kora jabe, emon ta chaile code ta hobe erokom:


// const ws = new WeakSet();
// class myClass {
//     constructor() {
//         ws.add(this);
//     }
//     myMethod() {
//         if (!ws.has(this))
//             throw new Error("You cannot access this method directly!");
//         else
//             return "I am method";
//     }
// }
// const a = new myClass();
// console.log(a.myMethod());
// Output: I am method

// Ei code e, prothom e weakset create hocche. Then class er object jokhon create 
// hocche sathe sathe constructor call hocche. And object ta weakset e add hocche ba 
// insert hocche.Karon this dara class er object ta kei bujhano hocche. Then object ta 
// jokhon function ke call dicche tokhon has() function diye dekhche weakset e object 
// ta ache kina. Jodi weakset e object ta na thake tahole error throw korbe. Ar jodi 
// weakset e object ta thake tahole "I am method" return korbe. Jehetu constructor call
// houar somoy weakset e object ta insert hoye geche tai "I am method" return korbe 
// and print korbe.


// const ws = new WeakSet();
// class myClass {
//     constructor() {
//         ws.add(this);
//     }
//     myMethod() {
//         if (!ws.has(this))
//             throw new Error("You cannot access this method directly!");
//         else
//             return "I am method";
//     }
// }
// console.log(myClass.prototype.myMethod());
// Output:
// Error: You cannot access this method directly!

// Ei code e, prothom e weakset create hocche. Then class er prototype jokhon function
// ta ke call dicche tokhon dekhche je weakset e oi class er object ache kina. Ekhan
// e class er object create korai hoi ni. Tai weakset e kono object insert hoi ni.
// Tai weakset faka. Tai error message ta throw korche.
