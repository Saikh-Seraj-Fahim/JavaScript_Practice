// Source-LWS

// function hello() {
//     return "Hello";
// }
// console.log(hello());
// Output: Hello

// async function hello() {
//     return "Hello";
// }
// console.log(hello());
// Output: Promise { 'Hello' }

// async function promise return kore.
// await keyword ta sudhu async function er moddhei use kora jai. async function er 
// baire kono jaiga te await keyword use kora jai na.

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// Callback er theke better approach hocche promise.Promise declare korar por promise
// jokhon call kora hoi ei promise call er 1 ta better approach hocche async-await.


// const paymentSuccess = true;
// const marks = 85;
// function enroll() {
//     console.log("Course enrollment is in progress.");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess === true)
//                 resolve();
//             else
//                 reject("Payment failed!");
//         }, 2000);
//     });
//     return promise;
// }
// function progress() {
//     console.log("Course on progress.......");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80)
//                 resolve();
//             else
//                 reject("You could not get enough marks to get the certificate.");
//         }, 3000);
//     });
//     return promise;
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Congrats! You got the certificate.");
//         }, 1000);
//     });
//     return promise;
// }
// async function course() {
//     try {
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// course();

// Output:
// Course enrollment is in progress.
// Course on progress.......
// Preparing your certificate!
// Congrats! You got the certificate.


// await sudhu oi asynchronous function kei pause kore. but oi asynchronous function 
// er baire baki kaj gulo korte thake.


// const paymentSuccess = true;
// const marks = 85;
// function enroll() {
//     console.log("Course enrollment is in progress.");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess === true)
//                 resolve();
//             else
//                 reject("Payment failed!");
//         }, 2000);
//     });
//     return promise;
// }
// function progress() {
//     console.log("Course on progress.......");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80)
//                 resolve();
//             else
//                 reject("You could not get enough marks to get the certificate.");
//         }, 3000);
//     });
//     return promise;
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Congrats! You got the certificate.");
//         }, 1000);
//     });
//     return promise;
// }
// async function course() {
//     try {
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// course();
// console.log("Outside Running 1.....");
// console.log("Outside Running 2.....");
// console.log("Outside Running 3.....");
// console.log("Outside Running 4.....");

// Output:
// Course enrollment is in progress.
// Outside Running 1.....
// Outside Running 2.....
// Outside Running 3.....
// Outside Running 4.....
// Course on progress.......
// Preparing your certificate!
// Congrats! You got the certificate.

// await sudhu oi asynchronous function kei pause kore. but oi asynchronous function
// er baire baki kaj gulo korte thake.

// Ei code e prothom e course function call hocche. course function e dhuke prothom ei
// enroll function call hocche. enroll function er moddhe dhuke prothom e Course
// enrollment is in progress eta print hobe. tarpor 2 second por setTimeout er moddhe
// dhukbe. to ei 2 second e ki korbe? jekhan theke enroll() call kora hoyechilo sekhan
// e chole asbe. ese dekhbe enroll() call korar somoy await use kora hoyechilo. tar
// mane ekhon async function er puro body pause hoye jabe. mane ekhon async function
// ta ar run hobe na. await er kaj hocche enroll() er kaj ses na houa porjonto async
// function ke pause kore rakha. tahole ei 2 second e async function er baire onno kaj
// thakle segulo korbe. async function er baire onno kaj hocche
// outside running 1,2,3,4 egula print kora. tai egula print hobe. er por 2 second
// hoye gele enroll() er setTimeout() er moddhe dhukbe and condition onujayee resolve
// hobe and promise ta return korbe. ekhon jehetu enroll() er kaj ses tahole ebar
// async function ta resume hobe and progress() call hobe. progress() er moddhe dhuke
// prothom e Course on progress....... print korbe. tarpor 3 second por setTimeout()
// er moddhe dhukbe. to ei 3 second wait na kore onno kaj korbe. tai jekhan theke
// progress() call kora hoyechilo sekhan e ese dekhbe await use kora hoyeche. se jonno
// async function ta abar pause hoye jabe. mane ar run hobe na. tai async function er
// baire onno kaj thakle seta korbe. ekhon async function er baire outside running
// 1,2,3,4 egula ache. but egula ager bar run hoyeche geche. tai ekhon ar run hobe na.
// mane ar onno kono kaj nai. se jonno abar progress() e chole jabe and 3 second hoye
// gele setTimeout() er moddhe dhuke jabe and condition onujayee resolve hobe and
// promise ta return korbe. ekhon jehetu progress() er kaj ses tahole ebar async
// function ta resume hobe and getCertificate() call hobe. etao same way te progress()
// er moto kore run hobe.


// const paymentSuccess = true;
// const marks = 70;
// function enroll() {
//     console.log("Course enrollment is in progress.");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess === true)
//                 resolve();
//             else
//                 reject("Payment failed!");
//         }, 2000);
//     });
//     return promise;
// }
// function progress() {
//     console.log("Course on progress.......");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80)
//                 resolve();
//             else
//                 reject("You could not get enough marks to get the certificate.");
//         }, 3000);
//     });
//     return promise;
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Congrats! You got the certificate.");
//         }, 1000);
//     });
//     return promise;
// }
// async function course() {
//     try {
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// course();
// Output:
// Course enrollment is in progress.
// Course on progress.......
// You could not get enough marks to get the certificate.

// catch() 1 bar execute hoye gele ar try er moddhe dhukbe na.


// const paymentSuccess = false;
// const marks = 70;
// function enroll() {
//     console.log("Course enrollment is in progress.");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess === true)
//                 resolve();
//             else
//                 reject("Payment failed!");
//         }, 2000);
//     });
//     return promise;
// }
// function progress() {
//     console.log("Course on progress.......");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80)
//                 resolve();
//             else
//                 reject("You could not get enough marks to get the certificate.");
//         }, 3000);
//     });
//     return promise;
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Congrats! You got the certificate.");
//         }, 1000);
//     });
//     return promise;
// }
// async function course() {
//     try {
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// course();
// Output:
// Course enrollment is in progress.
// Payment failed!

// catch() 1 bar execute hoye gele ar try er moddhe dhukbe na.


// YouTube Channel-Intellipaat
// Top 30 JavaScript Interview Questions 2025 | JavaScript Interview Questions & 
// Answers | Intellipaat

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Fetched Data is:", data);
    }
    catch (err) {
        console.log("Error:", err);
    }
}
fetchData();
console.log("Hello BD");
// Output:
// Hello BD
// Fetched Data is: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

