// Source-LWS

// Method covered : length, toString(), join(), pop(), push(), shift(), unshift(),
// splice(), toSpliced(), concat(), slice(), at(), copyWithin(), flat(), flatMap().

// ES6 covered : ES6_11, ES6_9, ES6_10, ES6_8, ES6_24.

// JavaScript Array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// Output: 4


// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) 
// array values.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// Output: Banana,Orange,Apple,Mango


// JavaScript Array join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join());
// console.log(fruits.join("*"));
// console.log(fruits.join(" * "));
// Output:
// Banana,Orange,Apple,Mango
// Banana*Orange*Apple*Mango      
// Banana * Orange * Apple * Mango


// Popping
// The pop() method removes the last element from an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);
// Output: [ 'Banana', 'Orange', 'Apple' ]

// The pop() method returns the value that was "popped out".

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.pop();
// console.log(a);
// console.log(fruits);
// Output:
// Mango
// [ 'Banana', 'Orange', 'Apple' ]


// Pushing
// The push() method adds a new element to an array (at the end).

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);
// Output: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// The push() method returns the new array length.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.push("Kiwi");
// console.log(a);
// console.log(fruits);
// Output:
// 5
// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// 11 - Array push() method - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// var numbers = [1, 2, 3, 4, 5];
// numbers.push(8, 9);
// console.log(numbers);
// Output:
// [
//     1, 2, 3, 4,
//     5, 8, 9
// ]

// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.push(8, 9);
// console.log(result);
// Output:7

// Array er moddhe kono array ke push korle seta array hisebei push hobe. Element
// hisebe push hobe na. Jamon:

// var numbers = [1, 2, 3, 4, 5];
// numbers.push(6, [8, 9]);
// console.log(numbers);
// Output: [ 1, 2, 3, 4, 5, 6, [ 8, 9 ] ]


// Shifting Elements
// The shift() method removes the first array element and "shifts" all other elements
// to a lower index.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
// Output: [ 'Orange', 'Apple', 'Mango' ]

// The shift() method returns the value that was "shifted out".
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a=fruits.shift();
// console.log(a);
// Output: Banana


// The unshift() method adds a new element to an array (at the beginning), and
// "unshifts" older elements.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);
// Output: [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]


// The unshift() method returns the new array length.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a=fruits.unshift("Lemon");
// console.log(a);
// Output: 5


// Changing Elements:
// Array elements are accessed using their index number.
// Array indexes start with 0.
// [0] is the first array element
// [1] is the second
// [2] is the third ...

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";
// console.log(fruits);
// Output: [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

// The length property provides an easy way to append a new element to an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// console.log(fruits);
// Output: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// delete fruits[2];
// console.log(fruits);
// Output: [ <1 empty item>, 'Orange', <1 empty item>, 'Mango' ]

// Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.


// The splice() method can be used to add new items to an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// The first parameter (2) defines the position where new elements should be added
// (spliced in).The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(a);
// console.log(fruits);
// Output:
// [ 'Apple' ]
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without
// leaving "holes" in the array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits);
// Output: [ 'Orange', 'Apple', 'Mango' ]

// The first parameter (0) defines the position where new elements should be added
// (spliced in).The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

// 9 - Array splice() method - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.splice(1, 2, 10, 12, 13, 19);
// console.log(result);
// console.log(numbers);
// Output:
// [ 2, 3 ]
// [
//    1, 10, 12, 13,
//    19, 4, 5
// ]

// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.splice(-1, 2, 10, 12, 13, 19);
// console.log(result);
// console.log(numbers);
// Output:
// [ 5 ]
// [
//    1,  2,  3,  4,
//   10, 12, 13, 19
// ]

// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.splice(-2, 2, 10, 12, 13, 19);
// console.log(result);
// console.log(numbers);
// Output:
// [ 4, 5 ]
// [
//    1,  2,  3, 10,
//    12, 13, 19
// ]

// JavaScript Array toSpliced():
// ES2023 added the Array toSpliced() method as a safe way to splice an array without
// altering the original array.The difference between the new toSpliced() method and
// the old splice() method is that the new method creates a new array, keeping the
// original array unchanged, while the old method altered the original array.

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const a = months.toSpliced(0, 1);
// console.log(a);
// console.log(months);
// Output:
// [ 'Feb', 'Mar', 'Apr' ]
// [ 'Jan', 'Feb', 'Mar', 'Apr' ]


// Merging Arrays (Concatenating):
// The concat() method creates a new array by merging (concatenating) existing arrays.

// const myGirls = ["Cecilie", "Lone", "Linus"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
// Output: [ 'Cecilie', 'Lone', 'Linus', 'Emil', 'Tobias', 'Linus' ]

// Note:
// The concat() method does not change the existing arrays.It always returns a new array.
// The concat() method can take any number of array arguments.

// Merging Three Arrays
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);
// Output:
// [
//     'Cecilie', 'Lone',
//     'Emil',    'Tobias',
//     'Linus',   'Robin',
//     'Morgan'
// ]

// The concat() method can also take strings as arguments.

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter", "Sumit");
// console.log(myChildren);
// Output: [ 'Emil', 'Tobias', 'Linus', 'Peter', 'Sumit' ]

// 10 - Array concat() method - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// var numbers1 = [1, 2, 3, 4, 5];
// var numbers2 = [6, 7, 8, 9];
// var result = numbers1.concat(numbers2);
// console.log(result);
// Output:
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]

// var numbers1 = [1, 2, 3, 4, 5];
// var numbers2 = [6, 7, 8, 9];
// var numbers3 = [10, 11, 12];
// var numbers4 = [13, 14, 15];
// var result = numbers1.concat(numbers2, numbers3, numbers4);
// console.log(result);
// Output:
// [
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12,
//     13, 14, 15
// ]

// var numbers1 = [1, 2, 3, 4, 5];
// var numbers2 = [6, 7, 8, 9];
// var result = numbers1.concat(numbers2, 10, 11, 12);
// console.log(result);
// Output:
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//     11, 12
// ]


// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);
// Output: [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

// Slice out a part of an array starting from array element 1 ("Orange").

// Note:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus);
// Output: [ 'Apple', 'Mango' ]

// Slice out a part of an array starting from array element 3 ("Apple").

// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to
// (but not including) the end argument.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// Output: [ 'Orange', 'Lemon' ]

// 8 - Array slice() method - Modern JavaScript Syntaxes in Bangla - ES6 + in Bangla

// Minus(-) thakle last index theke counting suru hobe.Last index -1, tar ager index
// -2 erokom.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(-2);
// console.log(citrus);
// Output: [ 'Apple', 'Mango' ]

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(-2, 4);
// console.log(citrus);
// Output: [ 'Apple' ]

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice();
// console.log(citrus);
// Output: [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]


// JavaScript Array at()
// ES2022 intoduced the array method at().
// Get the third element of fruits using at():

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at(2));
// Output: Apple

// Get the third element of fruits using []:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[2]);
// Output: Apple

// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// The at() method is supported in all modern browsers since March 2022.

// Note:
// Many languages allow negative bracket indexing like [-1] to access elements from the
// end of an object / array / string. This is not possible in JavaScript, because [] is
// used for accessing both arrays and objects. obj[-1] refers to the value of key -1,
// not to the last property of the object.
// The at() method was introduced in ES2022 to solve this problem.


// Array copyWithin()

// The copyWithin() method copies array elements to another position in an array.
// Examples
// Copy to index 2, all elements from index 0.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2, 0));  //(2,0,4)
// Output: [ 'Banana', 'Orange', 'Banana', 'Orange' ]

// Copy to index 2, the elements from index 0 to 2.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.copyWithin(2, 0, 2));
// Output: [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

// Note:
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.


// 24 -copyWithin() Array method-Modern JavaScript Syntaxes in Bangla-ES6+ in Bangla

// Syntax : copyWithin(target,start,end)
// target is required.
// start defaults to 0
// end defaults to array.length

// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(3, 2);  //(3,2,6)
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'Python', 'Ruby', 'C++' ]

// Ei code e end er value nai. Tai end er value hocche array length. Mane end er
// value 6.
// Target index theke suru kore value gula ke replace korte hobe. Ki dara replace
// korbo? start theke (end-1) index er value dara replace korte hobe. Tobe array er
// length fixed rekhe joto tuku replace kora jai toto tuku replace korte hobe.


// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(4, 1, 2);
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'PHP', 'RUST' ]


// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(3);  //(3,0,6)
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'JavaScript', 'PHP', 'Python' ]


// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(6, 1, 2);
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

// Ei code e target index 6. But array te 6 index e nai. 5 index porjonto ache.
// Tai eta invalid. Tai array ta jemon chilo temon e thakbe.


// Ei code e target er value 3. start, end er value deoa nai. Default value onusare,
// start er value 0 ar end er value 6 (array length).

// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(-3, -1, -2);
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

// Ei code e start pore, end age chole asar jonno eta invalid hoye geche. Tai array
// ta jemon chilo temon e thakbe.


// let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
// a.copyWithin(-3, -2, -1);
// console.log(a);
// Output: [ 'JavaScript', 'PHP', 'Python', 'C++', 'C++', 'RUST' ]


// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a
// one-dimensional array.

// JavaScript Array flat()
// ES2019 Introduced the Array flat() method.
// The flat() method creates a new array with sub-array elements concatenated to a
// specified depth.

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);
// Output: [ 1, 2, 3, 4, 5, 6 ]

// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.
// The flatMap() method first maps all elements of an array and then creates a new
// array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);
// Output:
// [
//     1, 10,  2, 20,  3,
//    30,  4, 40,  5, 50,
//     6, 60
// ]
