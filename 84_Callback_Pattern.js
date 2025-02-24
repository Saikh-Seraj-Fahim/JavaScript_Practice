// Source-LWS

// const paymentSuccess = true;
// const marks = 70;
// function enroll(callback) {
//     console.log("Course enrollment is in progress.");
//     setTimeout(function () {
//         if (paymentSuccess === true)
//             callback();
//         else
//             console.log("Payment failed!");
//     }, 2000);
// }
// function progress(callback) {
//     console.log("Course on progress.......");
//     setTimeout(function () {
//         if (marks >= 80)
//             callback();
//         else
//             console.log("You could not get enough marks to get the certificate.");
//     }, 3000);
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     setTimeout(function () {
//         console.log("Congrats! You got the certificate.");
//     }, 1000);
// }
// enroll(function () {
//     progress(getCertificate);
// });
// Output:
// Course enrollment is in progress.
// Course on progress.......
// You could not get enough marks to get the certificate.


// const paymentSuccess = true;
// const marks = 85;
// function enroll(callback) {
//     console.log("Course enrollment is in progress.");
//     setTimeout(function () {
//         if (paymentSuccess === true)
//             callback();
//         else
//             console.log("Payment failed!");
//     }, 2000);
// }
// function progress(callback) {
//     console.log("Course on progress.......");
//     setTimeout(function () {
//         if (marks >= 80)
//             callback();
//         else
//             console.log("You could not get enough marks to get the certificate.");
//     }, 3000);
// }
// function getCertificate() {
//     console.log("Preparing your certificate!");
//     setTimeout(function () {
//         console.log("Congrats! You got the certificate.");
//     }, 1000);
// }
// enroll(function () {
//     progress(getCertificate);
// });
// Output:
// Course enrollment is in progress.
// Course on progress.......
// Preparing your certificate!
// Congrats! You got the certificate.
