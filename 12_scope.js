//JavaScript Scope Explained 
//Scope in JavaScript determines where variables and functions are accessible in your code. 
//There are three types of scope:
// 1️⃣ Global Scope 
// 2️⃣ Function Scope (Local Scope) 
// 3️⃣ Block Scope (with let & const)

//1️⃣ Global Scope : A variable declared outside any function is global and can be accessed anywhere in the code.
//Example: Global Scope
let name = "Dev";

function greet(){
    console.log("name:", name);
}
greet()
console.log(name);
//Since name is global, it's available inside and outside the function.

//2️⃣ Function Scope (Local Scope) : Variables declared inside a function are local to that function and can't be accessed outside it.
//Variables declared inside a function are only available within that function.

function test(){
    let x = 10;
    console.log(x);
}
test()
//console.log(x); //This will throw an error because x is not defined in this scope.
//note :  message only exists inside test() and can't be used outside.

//3️⃣ Block Scope (let & const) : Variables declared with let or const inside {} exist only within that block.
//Variables declared with let or const are block-scoped, meaning they can only be accessed within that block. 
if (true){
    let age = 20;
    console.log(age); // Works inside the block
}
//console.log(age); //This will throw an error because age is not defined.
//note: let and const stay inside the {} block.

//Difference Between var, let, and const in Scope
if(true){
    var p = 1;
    let q = 2;
    const r = 3;

    console.log(p);
    console.log(q);
    console.log(r);
}
//console.log(p); //var is function scoped, so it's accessible outside the if block.
//console.log(q); //let is block scoped, so it's not accessible outside the if block
//console.log(r); //const is block scoped, so it's not accessible outside the if block
//note: var ignores block scope, but let and const respect it.

//4️⃣ Lexical Scope (Nested Scope) : Inner functions can access outer function variables.
//Inner functions can access outer function variables, but not the other way around.
function outer(){
    let outervar = 121;
       console.log(outervar)

    function inner(){
        console.log(outervar)
    }
    inner()
}
outer()
//console.log(outervar); // ❌ Error: outervar is not defined
// Inner functions inherit variables from outer functions.

//🎯 Summary
//Scope Type	Accessible Where?	Variables (var, let, const)
//Global Scope :	Everywhere	All (var, let, const)
//Function Scope :	Only inside function	All (var, let, const)
//Block Scope :	Only inside {} block	Only let and const


function one(){
    let nam = "Devraj"

    function two(){
        const website = "devraj.com"
        console.log(nam)
    }
    console.log(website) //undefined
    two()
}
one()
