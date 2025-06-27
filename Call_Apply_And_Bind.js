function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: "Fahim" };

greet.call(person, "Hello", "!");

greet.apply(person, ["Hi", "."]);

const sayHello = greet.bind(person, "Hey", "!");
sayHello();

// Output:
// Hello, Fahim!
// Hi, Fahim.
// Hey, Fahim!

// | Method    | What it does                                             | When it calls the function?          | Syntax                                |
// | --------- | -------------------------------------------------------- | ------------------------------------ | ------------------------------------- |
// | `call()`  | Calls a function with a given `this` and arguments       | Immediately                          | `func.call(thisArg, arg1, arg2, ...)` |
// | `apply()` | Like `call()`, but takes arguments as an array           | Immediately                          | `func.apply(thisArg, [args])`         |
// | `bind()`  | Returns a new function with a fixed `this` and arguments | **Later** (doesn't call immediately) | `func.bind(thisArg, arg1, arg2, ...)` |

// Source-ChatGPT

