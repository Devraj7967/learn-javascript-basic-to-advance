const score = 400
console.log(score)

//new Number(100) creates a Number object, not a primitive number.
//toString() converts the number to a string.
//toFixed(1) formats the number to one decimal place but returns a string.
const balance = new Number(100);
console.log(balance); // Outputs: [Number: 100] (Number object)
console.log(typeof balance) //output : object
console.log(typeof balance.toString()); //string
console.log(balance.toFixed(1)) // Outputs: "100.0" (toFixed(1) formats to 1 decimal place)

//3. Special Number Values
//JavaScript has some special number values:
//Infinity – A number too large to represent.
//-Infinity – A number too small to represent.
//NaN (Not-a-Number) – A result that is not a valid number.
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log("hello"*2) //NaN (Invalid calculation)

//4. Number Methods : JavaScript provides useful methods to work with numbers.
//toFixed() : Converts a number to a string with a fixed number of decimal places.
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

//toPrecision() : Formats a number with a specified length.
let num1 = 123.456;
console.log(num1.toPrecision(4)); // "123.5"

//parseInt() and parseFloat() : These functions convert strings into numbers.
let num2 = "100"
console.log(parseInt(num2)) // 100
console.log(parseFloat("23.4")) //23.4

//5. Random Numbers
//You can generate a random number using Math.random()
console.log(Math.random()); // A random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

//1. Rounding Methods : These methods help round numbers up, down, or to the nearest integer.
console.log(Math.round(4.7));  // 5  (Rounds to the nearest integer)
console.log(Math.ceil(4.3));   // 5  (Rounds up)
console.log(Math.floor(4.9)); //4  (Rounds down)
console.log(Math.trunc(4.9));  // 4  (Removes decimal part)

//2. Absolute, Power, and Square Root

console.log(Math.abs(-10))  // 10  (Absolute value: only removes negative sign)
console.log(Math.pow(2, 3));   // 8   (2^3 or 2 × 2 × 2)
console.log(Math.sqrt(16));    // 4   (Square root of 16)

//3. Min & Max

console.log(Math.max(5, 3, 9, 1));  // 9  (Finds the largest number)
console.log(Math.min(5, 3, 9, 1)); //1 (finds the smallest number)

//4. Random Numbers : Math.random() generates a random number between 0 and 1. You can modify it to generate numbers in a specific range.

console.log(Math.random());  // Random number (0 to 1)
console.log(Math.floor(Math.random() * 10) + 1); // Generate a random number between 1 and 10

//This code generates a random integer between 10 and 20 (inclusive).
const  min = 10;
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)




