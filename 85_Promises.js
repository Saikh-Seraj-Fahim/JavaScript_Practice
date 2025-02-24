// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// Output:
// Task 1
// Task 2
// Task 3

// Ekahn e Task 2 ke amra asynchronous korte pari evabe:

// console.log("Task 1");
// setTimeout(function () {
//     console.log("Task 2");
// }, 2000);
// console.log("Task 3");
// Output:
// Task 1
// Task 3
// Task 2

// Upor er code ta promise use kore evabe likha jai.

// const status = true;
// console.log("Task 1");
// // Promise definition
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (status === true)
//             resolve("Task 2");
//         else
//             reject("Failed");
//     }, 2000);
// });
// // Promise call
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// console.log("Task 3");
// Output:
// Task 1
// Task 3
// Task 2

// Protigga rakhte parle resolve() call korbe.Ar protigga na rakhte parle reject() 
// call kore dibe.Protigga rakhte parlo kina seta condition er upor depend korbe.
// Jemon ekhan e status true hole resolve() call korbe.Mane status true hole protigga 
// rakhte parbe.Ar status false hole protigga rakhte parbe na.
// resolve() call hole mane protigga rakhte parle resolve() jei value return kore
// seta then receive kore.Ar reject() call hole mane protigga na rakhte parle reject() 
// jei value return kore seta catch receive kore.


// const status = true;
// console.log("Task 1");
// // Promise definition
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (status === true)
//             resolve();
//         else
//             reject("Failed");
//     }, 2000);
// });
// // Promise call
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// console.log("Task 3");
// Output:
// Task 1
// Task 3
// undefined

// Ei code e resolve() kichu return kore ni.Tai undefined print hoyeche.


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
enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })
// Output:
// Course enrollment is in progress.
// Course on progress.......
// Preparing your certificate!
// Congrats! You got the certificate.

// Jokhon multiple then thake tokhon prottek then er sathe catch deoa lage na.
// Sob then serially likhe just 1 ta common catch diye sobar error catch kora jai.

// Upor er code e enroll() function call kora hoyeche.enroll function er moddhe resolve
// call hoyeche.Mane protigga rakhte pereche.Tai enroll function jokhon promise ta
// return koreche tokhon then er moddhe dhuke progress function call hoyeche. progress
// function er moddheo resolve call hoyeche.Mane protigga rakhte pereche.Tai progress
// function jokhon promise ta return koreche tokhon then er moddhe dhuke getCertificate
// function call hoyeche. getCertificate function er moddheo resolve call hoyeche.
// Mane protigga rakhte pereche. resolve function 1 ta string return koreche jeta last
// then receive kore print koreche.


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
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// Output:
// Course enrollment is in progress.
// Course on progress.......
// You could not get enough marks to get the certificate.

// catch() execute hole ar kono then execute hoi na.


// const paymentSuccess = false;
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
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// Output:
// Course enrollment is in progress.
// Payment failed!

// Upor er code e enroll() function call kora hoyeche.enroll function er moddhe reject
// call hoyeche.Mane protigga rakhte pare ni.reject function jei value return koreche
// seta catch receive koreche and print koreche.

// catch() execute hole ar kono then execute hoi na.