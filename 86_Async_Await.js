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


const paymentSuccess = true;
const marks = 85;
function enroll() {
    console.log("Course enrollment is in progress.");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess === true)
                resolve();
            else
                reject("Payment failed!");
        }, 2000);
    });
    return promise;
}
function progress() {
    console.log("Course on progress.......");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80)
                resolve();
            else
                reject("You could not get enough marks to get the certificate.");
        }, 3000);
    });
    return promise;
}
function getCertificate() {
    console.log("Preparing your certificate!");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Congrats! You got the certificate.");
        }, 1000);
    });
    return promise;
}
async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }
    catch (err) {
        console.log(err);
    }
}
course();
// Output:
// Course enrollment is in progress.
// Course on progress.......
// Preparing your certificate!
// Congrats! You got the certificate.

// Ei code e prothom e course function call hocche. course function e dhuke prothom ei
// enroll function call hocche. enroll function er moddhe setTimeout name e 1 ta
// asynchronous function ache. Normally JavaScript erokom asynchronous function er kaj
// waiting e rekhe baki kaj gula kore. Tarpor sobar ses e oi asynchronous function er
// kaj kore.But ekhan e jehetu enroll function call korar somoy await use kora hoyeche,
// tai enroll function er moddhe setTimeout function er kaj dekheo ota ke waiting e 
// rekhe baki onno kono kaj korbe na. Borong 2 second wait kore tarpor oi setTimeout 
// function er moddhe dhuke jabe.Tarpor resolve() call kore promise ta return kore 
// diyeche. resolve function jehetu kono kichu return kore ni tai enroll() function 
// call korar somoy kono variable use kora hoi ni.
// Mane await use korar karon e code ta sequentially execute holo.
// Erpor progress function call kora hoyeche. Etao same way te kaj kore promise return
// koreche.
// Tarpor sobar last e getCertificate function call hobe. getCertificate function er
// moddhe dhuke setTimeout function dekhte pabe. Normally setTimeout function ke
// waiting e rekhe baki kaj gulo korar kotha. But jehetu getCertificate function
// call korar somoy await use kora hoyechilo tai setTimeout function ke waiting e rekhe
// baki onno kono kaj korbe na.Borong 1 second wait kore setTimeout function er moddhe
// dhuke jabe. Tarpor resolve function call hobe. resolve function 1 ta string return
// koreche jeta message variable e store kora hoyeche. Erpor message variable er value
// print kora hoyeche.



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