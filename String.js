// Source-GFG

// Declaration of a String

// 1. Using Single Quotes

// let str='Create String with Single Quote';
// console.log(str);
// Output: Create String with Single Quote


// 2. Using Double Quotes

// let str="Create String with Double Quote";
// console.log(str);
// Output: Create String with Double Quote


// 3. String Constructor

// let str=new String('Create String with String Constructor');
// console.log(str);
// Output: [String: 'Create String with String Constructor']


// 4. Using Template Literals (String Interpolation)

// let str='Template Litral String';
// let newStr=`String created using ${str}`;
// console.log(newStr);
// Output: String created using Template Litral String


// 5. Empty String

// let str1='';
// let str2="";
// console.log("Empty String with Single Quotes:"+str1);
// console.log("Empty String with Double Quotes:"+str2);
// Output:
// Empty String with Single Quotes: 
// Empty String with Double Quotes: 


// 6. Multiline Strings (ES6 and later)

// let str=`
//     This is a
//     multiline
//     string`;
// console.log(str);
// Output:

// This is a
// multiline
// string 


// Basic Operations on JavaScript Strings

// 1. Finding the length of a String

// let str='JavaScript';
// let len=str.length;
// console.log("String Length:"+len);
// Output: 
// String Length:10


// 2. String Concatenation

// let str1='Java';
// let str2='Script';
// let result=str1+str2;
// console.log("Concatenated String : "+result);
// Output: 
// Concatenated String : JavaScript


// 3. Escape Characters

//      \' - Inserts a single quote
//      \" - Inserts a double quote 
//      \\ - Inserts a backslash

// const str1="\'GfG\' is a learning portal";
// const str2="\"GfG\" is a learning portal";
// const str3="\\GfG\\ is a learning portal";
// console.log(str1);
// console.log(str2);
// console.log(str3);
// Output:
// 'GfG' is a learning portal
// "GfG" is a learning portal 
// \GfG\ is a learning portal 


// 4. Breaking Long Strings

// We will use a backslash to break a long string in multiple lines of code
// const str="'GeeksforGeeks' is \
// a learning portal";
// console.log(str);
// Output: 'GeeksforGeeks' is a learning portal
// Note: This method might not be supported on all browsers.


// The better way to break a string is by using the string addition.
// const str="'GeeksforGeeks' is a"
//     + " learning portal";
// console.log(str);
// Output: 'GeeksforGeeks' is a learning portal


// 5. Find Substring of a String

// let str='JavaScript Tutorial';
// let substr=str.substring(0,10);
// console.log(substr);
// Output: JavaScript


// 6. Convert String to Uppercase and Lowercase

// let str='JavaScript';
// let upperCase=str.toUpperCase();
// let lowerCase=str.toLowerCase();
// console.log(upperCase);
// console.log(lowerCase);
// Output:
// JAVASCRIPT
// javascript


// 7. String Search in JavaScript

// let str='Learn JavaScript at GfG';
// let searchStr=str.indexOf('JavaScript');
// console.log(searchStr);
// Output: 6


// 8. String Replace in JavaScript

// let str='Learn HTML at GfG';
// let newStr=str.replace('HTML','JavaScript');
// console.log(newStr);
// Output: Learn JavaScript at GfG


// 9. Trimming Whitespace from String

// Remove leading and trailing whitespaces using trim() method.
// let str='    Learn JavaScript       ';
// let newStr=str.trim();
// console.log(newStr);
// Output: Learn JavaScript


// 10. Access Characters from String

// let str='Learn JavaScript';
// let charAtIndex=str[6];
// console.log(charAtIndex);
// charAtIndex=str.charAt(6);
// console.log(charAtIndex);
// Output:
// J
// J


// 11. String Comparison in JavaScript

// let str1="John";
// let str2=new String("John");
// console.log(str1==str2);
// console.log(str1.localeCompare(str2));
// Output:
// true
// 0
// Note: The Equality operator returns true, whereas the localeCompare method returns
// the difference of ASCII values.


// 12. Passing JavaScript String as Objects

// const str=new String("GeeksforGeeks");
// console.log(str);
// Output: [String: 'GeeksforGeeks']


// Are the strings created by the new keyword is same as normal strings?
// No, the string created by the new keyword is an object and is not the same as 
// normal strings.

let str1=new String("GeeksforGeeks");
let str2="GeeksforGeeks";
console.log(str1==str2);
console.log(str1===str2);
// Output:
// true
// false






