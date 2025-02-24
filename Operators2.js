// Source-GFG

// Bitwise Operators 

// Bitwise AND(&) Operator

// let a=5;
// let b=3;
// console.log(a&b);

// Output: 1

// function checkOddOrEven(n)
// { 
// 	if(n&1==1)
//     { 
// 		return "Number is odd";
// 	} 
// 	return "Number is even";
// } 
// console.log(checkOddOrEven(123));
// console.log(checkOddOrEven(246));
// Output:
// Number is odd
// Number is even


// Bitwise OR(|) Operator

// let a=24; // 011000
// let b=45; // 101101
// console.log(a|b);
// Output: 61


// Bitwise XOR(^) Operator

// let a=5; // 101
// let b=4; // 100
// console.log(a^b);

// Output: 1


// function getMissingNo(a,n)
// {
//     let x1=a[0];
//     let x2=1;
//     for(let i=1;i<n;i++) 
//         x1=x1^a[i];
//     for(let i=2;i<=n+1;i++) 
//         x2=x2^i;
//     return x1^x2;
// }
// let arr=[1,2,3,5];
// let N=arr.length;
// let missingNo=getMissingNo(arr,N);
// console.log(missingNo);

// Output: 4


// Bitwise NOT(~) Operator

// console.log(~24);
// console.log(~10); 
// console.log(~-10);

// Output:
// -25
// -11
// 9


// function twoComplement(n) 
// { 
// 	let j= ~(n.toString(2))+1;
// 	return j;
// } 
// console.log(twoComplement(2)); 
// console.log(twoComplement(-2));

// Output:
// -10
// 10


// Bitwise Left Shift (<<) Operator

// let a=4; 
// console.log(a<<1); 
// console.log(a<<4);

// Output:
// 8
// 64


// function multiplyPower(a,b) 
// { 
// 	return a<<b; 
// }	 
// console.log(multiplyPower(2,4));
// console.log(multiplyPower(3,2));

// Output:
// 32
// 12


// Bitwise Right Shift (>>) Operator

// let a=4;
// let b=-32
// console.log(a>>1); 
// console.log(b>>4);

// Output:
// 2
// -2


// function divByTwo(n) 
// { 
// 	return n>>1;
// } 
// console.log(divByTwo(5));
// console.log(divByTwo(-45));
// console.log(divByTwo(88));
// console.log(divByTwo(-23));

// Output:
// 2
// -23
// 44
// -12


// Zero Fill Right Shift (>>>) Bitwise Operator

// let a=4;
// let b=-1
// console.log(a>>>1);
// console.log(b>>>4);

// Output:
// 2
// 268435455


// let a="HEllo"; 
// let b=true; 
// let c=null; 
// console.log(a>>>1); 
// console.log(b>>>1); 
// console.log(c>>>1);

// Output:
// 0
// 0
// 0



// Logical Operators

// Logical AND(&&) Operator

// console.log(true && false);
// console.log(true && true);
// console.log(1 && 0); 
// console.log(1 && 2); 
// console.log("1" && true); 
// console.log("0" && true);

// Output:
// false
// true
// 0   
// 2   
// true
// true


// function a() 
// { 
//     console.log("Welcome")
//     return true; 
// } 
// function b() 
// { 
//     console.log("Hello")
//     return true; 
// } 
// console.log(a() && b());

// Output:
// Welcome
// Hello
// true


// Logical OR(||) Operator

// console.log(true || false);
// console.log(false || false);
// console.log(1 || 0);
// console.log(1 || 2);
// console.log("1" || true);
// console.log("0" || true);

// Output:
// true
// false
// 1
// 1
// 1
// 0


// function a() 
// {
//     console.log("Welcome")
//     return true;
// }
// function b() 
// {
//     console.log("Hello")
//     return false;
// }
// console.log(a() || b());

// Output:
// Welcome
// true


// Logical NOT(!) Operator

// console.log(!true); 
// console.log(!false); 
// console.log(!"1"); 
// console.log(!""); 
// console.log(!null);

// Output:
// false
// true
// false
// true
// true


console.log(!!true); 
console.log(!!false); 
console.log(!!"1"); 
console.log(!!""); 
console.log(!!null);

// Output:
// true
// false
// true
// false
// false