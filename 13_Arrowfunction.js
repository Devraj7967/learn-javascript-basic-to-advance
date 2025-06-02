//regular function required return 

function addtwo(a,b){
   return a + b; 
}
console.log(addtwo(2,4))   //6

//Arrow Function (With Curly Braces) : required return

const addthree = (a,b ,c) => {
    return a + b + c;
}
console.log(addthree(2,4,2)) //8

// Arrow function with implicit return : not required return
const addfour = (a,b,c,d) => a + b + c + d;
console.log(addfour(2,4,2,2)) //


//examples for regular function
function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5)) //20

//example for Arrow function
const divide = (a,b) => {
    return a/b;
}
console.log(divide(10,5))  //2

//example for Arrow function : not required return
const subtract = (a,b) =>  a-b;
console.log(subtract(10,3)) //7



