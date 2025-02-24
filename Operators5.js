// Source-GFG

// Ternary Operator

// function gfg() 
// {
//     let PMarks=40
//     let result=(PMarks>39)?"Pass":"Fail";
//     console.log(result);
// }
// gfg();
// Output: Pass


// function gfg() 
// {
//     let age=60
//     let result=(age>59)?"Senior Citizen":"Not a Senior Citizen";
//     console.log(result);
// }
// gfg();  
// Output: Senior Citizen


// function gfg() 
// {
//     let marks=95;
//     let result=(marks<40)?"Unsatisfactory":(marks<60)?"Average":(marks<80)?"Good":"Excellent";
//     console.log(result);
// }
// gfg(); 
// Output: Excellent


// Comma Operator

// function Func1() 
// {
//     console.log('one');
//     return 'one';
// }
// function Func2() 
// {
//     console.log('two');
//     return 'two';
// }
// function Func3() 
// {
//     console.log('three');
//     return 'three';
// }
// let x=(Func1(), Func2(), Func3());
// console.log(x);

// Output:
// one
// two
// three
// three


// for(let a=0,b=5;a<=5;a++,b--) 
// {
//     console.log(a,b);
// }
// Output:
// 0 5
// 1 4
// 2 3
// 3 2
// 4 1
// 5 0


// let a=1,b=2,c=3;
// console.log("Initial values:");
// console.log("a:",a);
// console.log("b:",b);
// console.log("c:",c);
// (a*=2), (b*=3), (c*=4);
// console.log("Updated values:");
// console.log("a:",a);
// console.log("b:",b);
// console.log("c:",c);

// Output:
// Initial values:
// a: 1
// b: 2
// c: 3
// Updated values:
// a: 2
// b: 6
// c: 12


// Relational operators (in Operator)

// let languages=["HTML","CSS","JavaScript"]
// // true (index 1 exists in the array)
// console.log(1 in languages);
// // false (index 3 doesn't exist in the array)
// console.log(3 in languages);

// Output:
// true
// false


// const Data={
//     name:"Rahul",
//     age:21,
//     city:"Noida"
// };
// // true ("name" property exists in the object)
// console.log("name" in Data);
// // false ("address" property doesn't exist in the object)
// console.log("address" in Data);

// Output:
// true
// false


// Relational operators (instanceof Operator)

// let languages=["HTML","CSS","JavaScript"];
// console.log(languages instanceof Array);
// console.log(languages instanceof Object);
// console.log(languages instanceof String);
// console.log(languages instanceof Number);

// Output:
// true
// true
// false
// false


// let myString=new String();
// let myDate=new Date();
// console.log(myString instanceof Object);
// console.log(myString instanceof Date);
// console.log(myString instanceof String);
// console.log(myDate instanceof Date);
// console.log(myDate instanceof Object);
// console.log(myDate instanceof String);

// Output:
// true
// false
// true 
// true 
// true 
// false


// BigInt Operators

// 1. Creating BigInt using BigInt() Function

// let bigNum = BigInt("123422222222222222222222222222222222222");// Parameter in decimal format
// console.log(bigNum)
// let bigHex = BigInt("0x1ffffffeeeeeeeeef");// Parameter in hexadecimal format
// console.log(bigHex);
// let bigBin = BigInt("0b1010101001010101001111111111111111");// Parameter in binary format
// console.log(bigBin);

// Output:
// 123422222222222222222222222222222222222n
// 36893488074118328047n      
// 11430854655n


// 2. Creating BigInt by appending n

// let bigNum=123422222222222222222222222222222222222n // Decimal format
// console.log(bigNum)
// let bigHex=0x1ffffffeeeeeeeeefn // Hexadecimal format
// console.log(bigHex)
// let bigBin=0b1010101001010101001111111111111111n // Binary format
// console.log(bigBin)

// Output:
// 123422222222222222222222222222222222222n
// 36893488074118328047n      
// 11430854655n


// Sorting

// Array consisting of both Number and BigInt
// let arr=[4,2,5n,2n]
// arr.sort()
// console.log(arr) // [2,2n,4,5n]

// Output: [ 2, 2n, 4, 5n ]


// String Operators

// String Concatenate Operator

// let str1="Geeks";
// let str2="forGeeks";
// let result=str1+str2;
// console.log(result);
// Output: GeeksforGeeks


// String Concatenate Assignment Operator

// let str1="Geeks";
// let str2="forGeeks";
// // Concatenation assignment
// str1+=str2; // str1=str1+str2
// console.log(str1);

// Output: GeeksforGeeks


// Unary Operators

// Unary Plus (+) Operator

// let str1="12";
// let num=+str1; // Using unary plus to convert string to number
// console.log(num);
// console.log(typeof (num))
// let str2=+"Geeks"; // "Geeks" cannot be converted to a number
// console.log(str2);

// Output:
// 12
// number
// NaN


// Unary Minus (-) Operator

// let str1="12";
// let num=-str1; // Unary negation, negates the value of number
// console.log(num);
// let str2 = -"Geeks";
// console.log(str2);

// Output:
// -12
// NaN


// Unary Increment (++) Operator

// let num=12;
// let numPostfix=num++;
// console.log(numPostfix);
// console.log(num);
// let num1=10;
// let num1Prefix=++num1;
// console.log(num1Prefix);
// console.log(num1);

// Output:
// 12
// 13
// 11
// 11


// Unary Decrement (–) Operator

// let num1=8;
// let num1Postfix=num1--;
// console.log(num1Postfix);
// console.log(num1);
// let num2=15;
// let num2Prefix=--num2;
// console.log(num2Prefix);
// console.log(num2);

// Output:
// 8
// 7
// 14
// 14


// Logical NOT (!) Operator
// let var1=false;
// let result1=!var1;
// console.log(result1);
// let val2=true;
// let result2=!val2;
// console.log(result2);

// Output:
// true
// false


// Bitwise NOT (~) Operator
// let num=10;
// let result= ~num; // Bitwise NOT, inverts all bits of 'num'
// console.log(result);
// Output: -11


// typeof Operator
let num=18;
let str="GeeksforGeeks";
let isTrue=true;
let obj={name:"Aman",age:21};
let undefinedVar;
console.log(typeof num);
console.log(typeof str);
console.log(typeof isTrue);
console.log(typeof obj);
console.log(typeof undefinedVar); 

// Output:
// number
// string
// boolean
// object
// undefined


// delete Operator
// let person={
//     name:"Ankit",
//     age:21,
//     city:"Noida"
// };
// console.log(person);
// delete person.age; // Deleting the 'age' property from the 'person' object
// console.log(person);

// Output:
// { name: 'Ankit', age: 21, city: 'Noida' }
// { name: 'Ankit', city: 'Noida' }


// void Operator
// function myFunction() 
// {
//     return void 0;
// }
// console.log(myFunction());
// Output: undefined