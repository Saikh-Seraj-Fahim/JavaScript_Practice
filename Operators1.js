// Source-GFG

// Assignment Operators

// Addition Assignment (+=) Operator

// concatenation of two number 
// let x=2; 
// let y=5; 
// console.log(x+=y); // x=x+y
// //concatenation of two string 
// let a='Geeks'
// let b='forGeeks'
// console.log(a+=b); // a=a+b

// Output:
// 7
// GeeksforGeeks


// let cities=["Delhi","Noida","Dehradun","Haldwani","Haridwar"]; 
// let start_with_D=" "; 
// for (city in cities) 
// { 
// 	if (cities[city].startsWith("D")) 
//     { 
// 		let names=cities[city]+" "; 
// 		start_with_D+=names 
// 	} 
// }
// console.log(start_with_D);

// Output: Delhi Dehradun


// Subtraction Assignment(-=) Operator
// let number=9; 
// number-=5; //number=number-5
// console.log(number);
// Output: 4


// let number=10; 
// let string="num"; 
// console.log(number-=string); //number=number-string
// Output: NaN


// Multiplication Assignment(*=) Operator
// let number=5; 
// number*=2; //number=number*2;
// console.log(number); 
// Output:10


// let number=10; 
// number*="GeeksforGeeks"; //number=number*"GeeksforGeeks"
// console.log(number); 
// Output: NaN


// Division Assignment(/=) Operator
// let x=18;
// x/=3; // x=x/3
// console.log(x); 
// x/=2; // x=x/2
// console.log(x); 
// x/=0; // x=x/0
// console.log(x);

// Output:
// 6
// 3
// Infinity


// let a=18;
// a/=3; // a=a/3
// console.log(a); 
// a/='bar'; // a=a/'bar'
// console.log(a);

// Output:
// 6
// NaN


// Remainder Assignment(%=) Operator
// let num=16;
// // Test if its divisible by 4
// if(num%4==0) 
// {
// 	console.log(true);
// }
// // Test for even number
// if(num%2==0) 
// {
// 	console.log(true);
// } 
// else 
// {
// 	console.log(false);
// }
// // Test for odd number
// if(!(num%2==0)) 
// {
// 	console.log(true);
// } 
// else 
// {
// 	console.log(false);
// }

// Output:
// true
// true 
// false


// let gfg=3;
// console.log((gfg%=2)); //gfg=gfg%2
// console.log((gfg%=0)); //gfg=gfg%0
// console.log((gfg%="world")); //gfg=gfg%"world"

// Output:
// 1
// NaN
// NaN


// Exponentiation Assignment(**=) Operator
// let x=6;
// console.log(x**=2); // x=x**2
// console.log(x**=0); // x=x**0
// console.log(x**='bar'); // x=x**'bar'

// Output:
// 36
// 1
// NaN


// let x=NaN;
// console.log(x**=2); //x=x**2
// Output: NaN


// Right Shift Assignment(>>=) Operator
// let x=7; // 00000000000000000000000000000111 
// x>>=2; // 00000000000000000000000000000001 
// // x=x>>2
// console.log(x);

// Output: 1


// let a=10; // 00000000000000000000000000001010 
// let b=2; // 00000000000000000000000000000010 
// a=a>>b; // 00000000000000000000000000000010
// console.log(a);

// Output: 2


// Left Shift Assignment (<<=) Operator
// let x=7; // 00000000000000000000000000000111 
// x<<=2; // 00000000000000000000000000011100 
// // x=x<<2
// console.log(x);

// Output: 28


// let x=1; // 00000000000000000000000000000001 
// x<<=-1; // -10000000000000000000000000000000 
// // x=x<<-1
// console.log(x);

// Output: -2147483648


// let a=10; // 00000000000000000000000000001010 
// let b=5 // 00000000000000000000000000000101 
// a=a<<b; // 00000000000000000000000101000000 
// console.log(a);

// Output: 320


// Nullish Coalescing Assignment (??=) Operator

// let x=12;
// let y=null;
// let z=13;
// x??=z;  // The value of x will become unchanged because x is not nullish. 
// y??=z;  // The value of y will be changed because y is nullish.
// console.log(x) // 12 
// console.log(y) // 13
// Output:
// 12
// 13


// let x = { 
//     name : "Ram"
//     } 
//     // The value of name will remain unchanged because x.name is not nullish 
//     x.name ??= "Shyam"; 
//     // There is no any property named age in object x. So the value of x.age will be 
//     // undefined and undefined means nullish. that's why the value of age will be 
// 	   assigned. 
//     x.age ??= 18;
//     console.log(x.name) // Ram 
//     console.log(x.age) // 18
// Output:
// Ram
// 18


// Logical OR assignment (||=) Operator 

	// let name = { 
	// firstName: "Ram", 
	// lastName: "", 
	// }; 
	// console.log(name.firstName); 
	// // Changing the value using logical 
	// // OR assignment operator 
	// name.firstName ||= "Shyam"; 
	// // But value does not change because 
	// // name.firstName is truthy 
	// console.log(name.firstName); 
	// console.log(name.lastName); 
	// // Changing the value using logical 
	// // OR assignment operator 
	// name.lastName ||= "Camel"; 
	// // The value changes because name.lastName is falsy 
	// console.log(name.lastName);

// Output:
// Ram
// Ram

// Camel


// Logical AND assignment (&&=) Operator

	// let name = { 
	// firstName: "Ram", 
	// lastName: "", 
	// }; 
	// console.log(name.firstName); 
	// // Changing the value using logical 
	// // AND assignment operator 
	// name.firstName &&= "Shyam"; 
	// // Here the value changed because 
	// // name.firstName is truthy 
	// console.log(name.firstName); 
	// console.log(name.lastName); 
	// // Changing the value using logical 
	// // AND assignment operator 
	// name.lastName &&= "Camel"; 
	// // Here the value remains unchanged 
	// // because name.lastName is falsy 
	// console.log(name.lastName); 

// Output:
// Ram
// Shyam



// Bitwise OR Assignment (|=) Operator

// let a=2; // Binary presentation 10
// let b=3; // Binary presentation 11
// let c= a|=b
// console.log(c);
// Output: 3


// let x=10; // Binary presentation 1010
// let y=12; // Binary presentation 1100
// console.log(x|=y);
// Output: 14


// Bitwise AND Assignment (&=) Operator

// let x=7; // 00000000000000000000000000000111 
// x&=3;	 // 00000000000000000000000000000011 
// // x=x&3
// console.log(x);
// Output: 3


// let x=7; // 0111
// let y=3; // 0011
// x&=y; // x=x&y
// console.log(x); 
// x&=0; // x=x&0
// console.log(x);
// Output:
// 3
// 0


// Bitwise XOR Assignment (^=) Operator

// let a=2; // Binary representation 10 
// let b=4; // Binary representation 100 
// console.log(a^=b); //a=a^b
// Output: 6


// let a=14; // Binary representation 1110 
// let b=18; // Binary representation 10010 
// console.log(a^=b); //a=a^b
// Output: 28








