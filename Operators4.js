// Source-GFG

// Arithmetic Operator

// Addition (+) Operator

// console.log(1+2);
// console.log(NaN+1);
// console.log(true+1);
// console.log(false+1);

// Output:
// 3
// NaN
// 2  
// 1  


// console.log("1"+2);
// console.log("Hello "+"Geek");

// Output:
// 12
// Hello Geek


// let y=5+"hello"; 
// console.log(y);

// Output:
// 5hello


// Subtraction(-) Arithmetic Operator

// console.log(200-100); 
// console.log("10"-2); 
// console.log("Hello"-3);

// Output:
// 100
// 8
// NaN


// console.log(200n-100n); 
// console.log(200n-100);
// TypeError: Cannot mix BigInt and other types, use explicit conversions at 
// Object.<anonymous> 


// Multiplication(*) Arithmetic Operator

// console.log(100*20);
// console.log(Infinity*100);
// console.log(Infinity*0);
// console.log(Infinity*Infinity);
// console.log(NaN*100);

// Output:
// 2000
// Infinity
// NaN     
// Infinity
// NaN     


// console.log("hello"*20); 
// console.log("100"*100);
// Output:
// NaN
// 10000


// Division(/) Arithmetic Operator

// console.log(100/20); 
// console.log(Infinity/0); 
// console.log(Infinity/-0);
// Output:
// 5
// Infinity
// -Infinity


// console.log("100"/20); 
// console.log("Hello"/0);
// Output:
// 5
// NaN


// let x=5/2;
// let y=1.0/2.0;
// console.log(x);
// console.log(y);
// let a=3.0/0;
// let b=4.0/0.0;
// console.log(a);
// console.log(b);
// let z=2.0/-0.0;
// console.log(z);

// Output:
// 2.5
// 0.5
// Infinity
// Infinity
// -Infinity


// Modulus(%) Arithmetic Operator

// console.log(100%23);
// console.log(Infinity%20);
// Output:
// 8
// NaN


// console.log(-100%23);
// console.log(NaN%20);
// Output:
// -8
// NaN


// let x=9%5;
// let y=-12%5;
// let z=1%-2;
// let a=5.5%2;
// let b=-4%2;
// let c=NaN%2;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);

// Output:
// 4
// -2 
// 1  
// 1.5
// -0 
// NaN


// Exponentiation(**) Arithmetic Operator

// let a=4; 
// let b=3; 
// let c=-2 
// console.log(a**b); 
// console.log(b**a); 
// console.log(c**a); 
// console.log(a**c)
// Output:
// 64
// 81
// 16
// 0.0625


// console.log(-2**3)
// SyntaxError: Unary operator used immediately before exponentiation expression. 
// Parenthesis must be used to disambiguate operator precedence


// console.log(NaN**3) 
// console.log(NaN**0)
// Output:
// NaN
// 1


// let x= -4**2 // This is an incorrect expression
// let y=-(4**2);
// let z=2**5;
// let a=3**3;
// let b=3**2.5; 
// let c=10**-2;
// let d=2**3**2; 
// let e=NaN**2;
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Output:
// -16
// 32
// 27
// 15.588457268119896
// 0.01
// 512
// NaN


// Increment(++) Arithmetic Operator

// let x=10;
// console.log(x++);
// console.log(x);
// Output:
// 10
// 11


// let x=10;
// console.log(++x);
// console.log(x);
// Output:
// 11
// 11


// Postfix 
let a=2;
b=a++; // b=2, a=3
console.log(a);
console.log(b);
// Prefix
let x=5;
y=++x; // x=6, y=6
console.log(x);
console.log(y);

// Output:
// 3
// 2
// 6
// 6


// Decrement(–) Arithmetic Operator

// let x=10; 
// console.log(x--); 
// console.log(x);
// Output:
// 10
// 9


// let x=10; 
// console.log(--x); 
// console.log(x);
// Output:
// 9
// 9


// Prefix
// let a=2;
// b=--a; 
// console.log(a);
// console.log(b);
// Postfix 
// let x=3;
// y=x--;
// console.log(x);
// console.log(y);

// Output:
// 1
// 1
// 2
// 3


// Arithmetic Unary Plus(+) Operator

// const x="10"; 
// let y; 
// y= +x; 
// console.log(y); 
// console.log(typeof y);

// Output:
// 10
// number


// const a=100; 
// const b=-100; 
// const c=20; 
// console.log(+a); 
// console.log(+b); 
// console.log(+c);

// Output:
// 100
// -100
// 20  


// const a=true; 
// const b=false; 
// const c=null; 
// const d= function (x){ 
// 	return x
// }; 
// console.log(+a); 
// console.log(+b); 
// console.log(+c); 
// console.log(+d);

// Output:
// 1
// 0
// 0
// NaN



// let a= +4;
// let b= +'2';   
// let c= +true;  
// let x= +false; 
// let y= +null;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);
// console.log(y);

// Output:
// 4
// 2
// 1
// 0
// 0


// Unary Negation(-) Operator

	// const a=20;
	// const b= -a; 
	// console.log(b); 
	// console.log(typeof b); 
	// const x='20'; 
	// const y= -x;
	// console.log(y); 
	// console.log(typeof y); 

// Output:
// -20
// number
// -20   
// number


	// const x=30; 
	// const y= -x;
	// console.log(y); 
	// console.log(typeof y);

    // Output:
    // -30
    // number


	// const x = "30"; 
	// const y = -x; 
	// console.log(y); 
	// console.log(typeof y);

    // Output:
    // -30
    // number

