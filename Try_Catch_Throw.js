// Source-GFG
// try 
// {
//     dadalert("Welcome Fellow Geek!");
// }
// catch(err) 
// {
//     console.log(err);
// }

// ReferenceError: dadalert is not defined


// function geekFunc() 
// {
//     let a=10;
//     try 
//     {
//         console.log("Value of variable a is : " + a);
//     }
//     catch(e) 
//     {
//         console.log("Error: " + e.description);
//     }
// }
// geekFunc();

// Output: Value of variable a is : 10


// try 
// {
//     throw new Error('Yeah... Sorry');
// }
// catch(e) 
// {
//     console.log(e);
// }

// Output: Error: Yeah... Sorry


try 
{
    console.log('try');
} 
catch (e) 
{
    console.log('catch');
} 
finally 
{
    console.log('finally');
}            
// Output:
// try
// finally

