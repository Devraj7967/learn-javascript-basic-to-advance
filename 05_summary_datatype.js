//JavaScript is a dynamic programming language.
//It can change or update the values of variables at runtime.
//variables are not fixed to one type. This means you can store different types of values in the same variable at different times.
// A variable can hold a value of any type, and its type can change at runtime.


//  primitive data types (like number, string, boolean, undefined, null, symbol, and bigint) are passed by value(call by value) when used as function arguments.
//call by value : When you pass a primitive value to a function, a copy of the value is sent, Any changes made inside the function do not affect the original variable.
// primitives (like number, string, boolean, etc.) are immutable, and JavaScript passes their values by copying.

//number
const number = 23 //number

//
const score = 120.2 //"number" for both integers and floating-point numbers.

//string
const name = "dev" //string

//boolean
const isLoggedIn = false //boolean


//null
const user = null;
console.log(typeof user); // output : "object"

//undefined
let email;  //undefined


// Symbols are immutable, meaning once created, they cannot be changed.
const id1 = Symbol('123');
const id2 = Symbol('123');
console.log(id1 === id2); // output: false (Symbols are unique, even with same description)

//bigint
const bignumber = 230305101235n //This is because the n at the end of the number literal indicates a BigInt, which is used for very large integers. 
console.log(typeof bignumber); // output: bigint

//non-primitive data types are data types that can hold collections of values or more complex entities. They include objects, arrays, and functions. These types are passed by reference.
//Call by reference : means the function gets a reference to the same object or array, not a copy, Any changes made inside the function, affect the original variable
//non-primitives (like objects, arrays, etc.) are mutable, and JavaScript passes their references    

//array
const heroes = ["srk" , "tom cruise" , "akshay kumar"]  //This is because arrays in JavaScript are technically a type of object. The typeof operator returns "object" for arrays.

//object
const obj1 = {
    name : "elon musk",
    age : 50 ,
    networth : "$486 billion"
}       //object


//function
const myfunc = function(){
    console.log("hello world")
}
myfunc()
console.log(typeof myfunc)  //function


//memory in javascript: Memory is allocated when variables, objects, arrays, functions, or other types of data are created. JavaScript uses two types of memory for storing data: stack and heap.

// Stack Memory: This is used for storing primitive data types such as numbers, strings, and booleans. These values are simple, immutable, and small in size, so they are stored directly in the stack.
//example

let fullname = "Devraj";
let anothername = fullname
anothername = "Dev"
console.log(anothername) //output : Dev
console.log(fullname) //output: Devraj
console.log(fullname === anothername) //false



//Heap Memory: This is used for storing more complex types, like objects, arrays, and functions. These are reference types, meaning that only a reference to the actual data is stored in the stack, while the actual data itself is stored in the heap.

let userone = {
    name : "Devraj",
    age : 20

}
let usertwo = userone
usertwo.name = "Dev"
console.log(userone.name) //output: { name: 'Dev' }
console.log(usertwo.name) //output: { name: 'Dev' }
console.log(userone === usertwo) //true
