// Source-LWS

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());
// console.log(person.fullName);
// console.log(typeof person.fullName()); // string
// console.log(typeof person.fullName); // function
// Output: 
// John Doe
// [Function: fullName]       
// string
// function


// If you invoke the fullName property with (), it will execute as a function.
// If you access the fullName property without (),it will return the function definition.


// In the example above, this refers to the person object.
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566
// };
// person.fullName=function()
// {
//     return this.firstName+" "+this.lastName;
// }
// console.log(person.fullName());
// Output: John Doe


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566
};
person.fullName=function()
{
    return (this.firstName+" "+this.lastName).toUpperCase();
    // We can use the built-in JavaScript methods with object properties.
}
console.log(person.fullName());
// Output: JOHN DOE