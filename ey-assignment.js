let a = 2;
let b = 3;
let c = 2;
(a == b) // returns False
(a == c) // returns True

typeof "John Doe" // Returns String
typeof 3.14 // Returns Number
typeof true // Returns Boolean
typeof 234567890123456789012345678901234567890n // Returns Big Integer (bigint)
typeof undefined // Returns Undefined
typeof null // Returns Object (Because null is an object in js)
typeof Symbol('symbol') // Returns Symbol

let x = 2;
let y = "2";
(x == y) // Returns True because both are '2' no matter the type
(x === y) // Returns False because even both are '2' its a strict equality and expects the same type for equality

let x = 3;
let y = "3";
x + y // Returns "33" (Str)

let x = 24;
let y = "Hello";
x + y // Returns "24Hello"

let name = "Vivek";
let surname = " Bisht";
name + surname // Returns "Vivek Bisht"

let x = 3;
let y = "3";
x - y //Returns 0 as a number because JavaScript converts string in string-number subtraction 

let x = 0;
let y = 23;

if(x) { console.log(x) } // x has a falsy value so condition is false and there will be no log prompt

if(y) { console.log(y) } // y has a truthy value so condition is true so statement will execute the printing value of y which is '23' as a number

isNaN("Hello") // Returns True because "Hello" is a string which is a NaN
isNaN(345) // Returns False because 345 is a number
isNaN('1') // Returns False '1' is parsed to a number 1
isNaN(true) // Returns False because True has value 1
isNaN(false) // Returns False because False has value 0
isNaN(undefined) // Returns True because undefined cannot be parsed to a number
