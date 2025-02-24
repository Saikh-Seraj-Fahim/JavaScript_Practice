// Source-GFG

// For Loop

// let x;
// for (x = 2; x <= 4; x++) {
//     console.log("Value of x: " + x);
// }
// Output:
// Value of x: 2
// Value of x: 3
// Value of x: 4


// let x = 2;
// for (; x <= 4; x++) {
//     console.log("Value of x: " + x);
// }
// Output:
// Value of x: 2
// Value of x: 3
// Value of x: 4


// let x = 2;
// for (; ; x++) {
//     console.log("Value of x: " + x);
//     break;
// }
// Output:
// Value of x: 2


// const subjects = ["Math", "Science", "Polity", "History"];
// let i = 0;
// let len = subjects.length;
// let gfg = "";
// for (; i < len;) {
//     gfg = gfg + subjects[i]; //gfg+=subjects[i];
//     i++; //can be increased inside loop
// }
// console.log(gfg);
// Output: MathSciencePolityHistory


// While Loop

// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }
// Output:
// 1
// 2
// 3
// 4
// 5


// Do-While Loop
// let test = 1;
// do {
//     console.log(test);
//     test++;
// } while (test <= 5)
// Output:
// 1
// 2
// 3
// 4
// 5


// Difference between While and Do-While loop:
let test = 1;
do {
    console.log(test);
} while (test < 1)

while (test < 1) {
    console.log(test);
}
// Output: 1

