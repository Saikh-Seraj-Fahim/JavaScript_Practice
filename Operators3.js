// Source-GFG

// Comparison Operators

// Equality(==) Comparison Operator

// let a=1; 
// let b=1; 
// let c=new String("Hello"); 
// let d=new String("Hello"); 
// let e="Hello";
// console.log(a==b); 
// console.log(c==d); 
// console.log(c==e);

// Output:
// true
// false
// true


// let a=1; 
// let b="1"; 
// let c=true
// console.log(a==b); 
// console.log(b==c); 
// console.log(a==c);

// Output:
// true
// true
// true


// let a=new Date();
// let b=a.toString();
// console.log(a==b);

// Output: true


let val1=5;
let val2='5';
console.log(val1==5);
console.log(val2==5);        
console.log(val1==val1);
console.log(0==false);   
console.log(0==null);

// Output:
// true
// true
// true
// true
// false


// Inequality(!=) Comparison Operator

// let a=1;
// let b=2;
// let c=new String("Hello");
// let d=new String("Hello");
// let e="Hello";
// console.log(a!=b);
// console.log(c!=d);
// console.log(c!=e);

// Output:
// true
// true
// false


// let a=1;
// let b="1";
// let c=true
// console.log(a!=b);
// console.log(b!=c);
// console.log(a!=c);

// Output:
// false
// false
// false


// let a={ 
// 	name:"Ram", 
// } 
// let b={ 
// 	name:"Ram", 
// } 
// console.log(a!=b)

// Output: true


// let val1=5;
// let val2='5';
// console.log(val1!=6);
// console.log(val2!='5');        
// console.log(val1!=val2);
// console.log(0!=false);   
// console.log(0!=null);

// Output:
// true
// false
// false
// false
// true


// Strict Equality(===) Comparison Operator

// let a=2,b=2,c=3;
// let d={name:"Ram"};
// let e={name:"Ram"};
// let f=e;
// console.log(a===b); 
// console.log(a===c); 
// console.log(d===e); 
// console.log(f===e);

// Output:
// true
// false
// false
// true


// let a=2;
// let b="2";
// let c=true;
// let d=null;
// let e=undefined;
// console.log(a===b);
// console.log(a===c);
// console.log(d===e);

// Output:
// false
// false
// false


// let val1=5;
// let val2='5';
// console.log(val1===6);
// console.log(val2==='5');        
// console.log(val1===val2);
// console.log(0===false);   
// console.log(0===null);

// Output:
// false
// true 
// false
// false
// false


// Strict Inequality(!==) Comparison Operator

// let a=2; b=2,c=3;
// let d={name:"Ram"};
// let e={name:"Ram"};
// let f=e;
// console.log(a!==b);
// console.log(a!==c);
// console.log(d!==e);
// console.log(f!==e);

// Output:
// false
// true
// true
// false


// let a=2;
// let b="2";
// let c=true;
// let d=null;
// let e=undefined; 
// console.log(a!==b);
// console.log(a!==c);
// console.log(d!==e);

// Output:
// true
// true
// true


// let val1=5;
// let val2='5';
// console.log(val1!==6);
// console.log(val2!=='5');        
// console.log(val1!==val2);
// console.log(0!==false);   
// console.log(0!==null);

// Output:
// true
// false
// true
// true
// true

// Greater than(>) Comparison Operator

// console.log("3">2); 
// console.log("2">3); 
// console.log(true>false);

// Output:
// true
// false
// true


// console.log(2n>2); 
// console.log(5n>4); 
// console.log(undefined>null); 
// console.log(null>undefined)

// Output:
// false
// true
// false
// false


// Greater Than or Equal(>=) Comparison Operator

// console.log("3">=2); 
// console.log("2">=3); 
// console.log(true>=false); 
// console.log("3">="2"); 
// console.log(3>=2);

// Output:
// true
// false
// true 
// true 
// true 


// console.log(2n>=2); 
// console.log(5n>=4); 
// console.log(undefined>=null); 
// console.log(null>=undefined)

// Output:
// true
// true
// false
// false


// Less Than(<) Comparison Operator

// console.log("3"<2);
// console.log("2"<3);
// console.log(true<false);

// Output:
// false
// true
// false


// console.log(2<2n); 
// console.log(5n<4); 
// console.log(undefined<null); 
// console.log(null<undefined)

// Output:
// false
// false
// false
// false



// Less Than or Equal(<=) Comparison Operator

// console.log("3"<=2); 
// console.log("2"<=3); 
// console.log(true<=false); 
// console.log("3"<="2"); 
// console.log(3<=2);

// Output:
// false
// true
// false
// false
// false


// console.log(2n<=2); 
// console.log(5n<=4); 
// console.log(undefined<=null); 
// console.log(null<=undefined)

// Output:
// true
// false
// false
// false