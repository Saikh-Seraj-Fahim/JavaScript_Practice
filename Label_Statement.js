// Source-GFG
// let sum=0,a=1;
// // Label for outer loop
// outerloop: while(true) 
// {
//     a=1;
//     // Label for inner loop
//     innerloop: while(a<3)
//     {
//         sum=sum+a; //sum+=a;
//         if(sum>12) 
//         {
//             // Break outer loop from inner loop
//             break outerloop;
//         }
//         console.log("sum = "+sum);
//         a++;
//     }
// }
// Output:
// sum = 1
// sum = 3 
// sum = 4 
// sum = 6 
// sum = 7 
// sum = 9 
// sum = 10
// sum = 12


let sum=0,a=1;
// Label for outerloop
outerloop: while(sum<12) 
{
    a=1;
    // Label for inner loop
    innerloop: while(a<3) 
    {
        sum=sum+a; //sum+=a;
        if(a===2 && sum<12) 
        {
            // Jump to outer loop from inner loop
            continue outerloop;
        }
        console.log("sum = "+sum+" a = "+a);
        a++;
    }
}

// Output:
// sum = 1 a = 1
// sum = 4 a = 1
// sum = 7 a = 1
// sum = 10 a = 1
// sum = 12 a = 2


// blockOfCode: 
// {
//     console.log('This part will be executed');
//     break blockOfCode;
//     console.log('this part will not be executed');
// }
// console.log('out of the block');

// Output:
// This part will be executed
// out of the block


// myLabel: function myLabeledFunction() 
// {
//     console.log("This is a labeled function.");
// }
// // Calling the labeled function
// myLabeledFunction();
// Output: This is a labeled function.
