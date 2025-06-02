const accountId = 2120
let accountEmail = "dev@gmail.com"
var accountPassword = "12345"
accountcity = "mumbai"
let accountState;
//accountId = 2 const can't change
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

accountState = "Maharashtra" //now value defined
accountEmail = "d@gmail.com"
accountPassword = "21121" 
accountcity = "bengaluru"  
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])   

//const: const means this value cannot be reassigned later, Used for values that shouldn’t change (like IDs, API keys).

//let: let allows you to reassign the value later, Block-scoped — safer than var , A variable is only accessible inside the {} block where it was declared.

//var : var is function-scoped means A variable is only accessible inside the function where it's declared using var,  and can lead to bugs in larger programs due to hoisting or scope confusion.

//accountcity = "mumbai";
//You didn’t declare this variable with let, const, or var.
//JavaScript will treat this as a global variable, which is risky.
//✅ Best practice: always declare variables.