const accountId = 2120
let accountEmail = "dev@gmail.com"
var accountPassword = "12345"
accountcity = "mumbai"
let accountState;
//  accountId = 2 const can't change
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/


accountEmail = "d@gmail.com"
accountPassword = "21121" 
accountcity = "bengaluru"  
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])                         