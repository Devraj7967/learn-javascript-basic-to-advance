//Functions in JavaScript are blocks of reusable code that perform a specific task. You can define, call, and return values from functions in different ways.

//1. Basic Function Syntax : A function is created using the function keyword:
function greet(){
    console.log("hello world")
}
greet() // Calling the function

//2️. Function with Parameters : Functions can accept parameters (inputs):
// name is a parameter that takes different values.
function nam(name){
    console.log(`hello, ${name}`)
}
nam("Dev"); //hello, Dev   , here "Dev" is argument
nam("Raj"); //hello, Raj   , here "Raj" is argument

//note: in this function name is parameters , "Dev" and "Raj" is argument

// function to add two number
function add(num1, num2){
    console.log(num1 + num2)
}
add(5,8) //13

//3️. Function with Return Value
function addtwonum(n1, n2){
    return n1 + n2;
}
// calling the function and storing the result in a variable
let result = addtwonum(5,5);
console.log(result); //10
//return sends back a value that can be stored in a variable.

//4️. Function Expression (Anonymous Function) :function expression is a function that is defined without a name.
//Functions can be stored in variables:
//multiply stores the function.
const multiply = function(a,b){
    return a*b
}
console.log(multiply(2,2)) //4

//userlogin
function userloggedin(username){
    console.log(`${username} is logged in successfully`)
}
userloggedin("Dev23") //Raj is logged in successfully

//Different ways
function userlogin(name){
    return `${name} is login successfully`
}
console.log(userlogin("Raj")) //Raj is login successfully
console.log(userlogin()) //if argument not passed then output shows : undefined is login successfully

//function with if statement
function user1(user){
    if(user === undefined){   //you can use !user insted of user === undefined 
        console.log("user is not defined")
        return
    }
    console.log(`${user} just logged in`)
}
user1() //om just logged in
//note if user not define , output shows : user is not defined

//Function with objects and array in js

//1.
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(101, 211 , 699))

// How Does This Work?
// The function calculateCartPrice takes multiple arguments using the rest parameter (...num1).
// The rest parameter collects all arguments into an array.
// The function returns the array.
// The console.log statement prints the returned array.

// What If No Arguments Are Passed?
console.log(calculateCartPrice()); // []
//If no arguments are passed, num1 becomes an empty array ([]).


//2.

function numbers(n1, n2,...num){
    return num
}
console.log(numbers(1,2,3,4,5)) //output : [3, 4, 5]
// The function numbers takes two regular parameters (n1, n2) and then a rest parameter (...num).
// The first two arguments (1 and 2) are assigned to n1 and n2.
// The remaining arguments (3, 4, 5) are collected into an array (num).
// The function returns this array.

//3.
const person = { name: "Alice", 
                 age: 25
               };

function printUser(user) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
  }
printUser(person); // User: Alice, Age: 25


//different way 
//You can directly destructure properties inside the function parameter:

function printUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
  }
  
  printUser({ name: "Bob", age: 30 }); // User: Bob, Age: 30

  // Cleaner syntax, no need to use user.name inside the function.

//array 
const num = [1, 2, 3, 4, 5];

function secondNum(getnum){
    return getnum[1]
}
console.log(secondNum(num)) //2
  