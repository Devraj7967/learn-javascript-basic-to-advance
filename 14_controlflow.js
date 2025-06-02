//Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a program.
//In other words, it controls the path your code takes when it runs — deciding which parts to execute, repeat, or skip based on certain conditions.


//Checks if the number is greater than 5.
const number =  4;
if (number > 5) {
    console.log("number is greater than 5")
}

//if...else if...else Statement : This allows you to check multiple conditions in sequence.
const temperature = 10;
if (temperature > 30) {
    console.log("It's a hot day")
}else if (temperature < 20) {
    console.log("It's a cold day") //"It's a cold day"
}
else {
    console.log("It's a nice day")
}

//Boolean if/else Condition
const isRaining = false;
if (isRaining) {
    console.log("Take an umbrella")
}else{
    console.log("No need for an umbrella") //"No need for an umbrella"



}

// Ternary operator : condition ? valueIfTrue : valueIfFalse
const isRaining1 = true;
const message = isRaining1 ? "Take an umbrella" : "No need for an umbrella";
console.log(message)

// Switch statement :  Use switch when checking one value against multiple cases.
const color = "red";
switch (color){
    case "yellow":
        console.log("color is yellow")
        break;
    case "red":
        console.log("color is red")
        break;
}

//In JavaScript, any non-zero, non-empty value is considered truthy. 
//example : truthy values: true, 1, "hello", [], {}
// Empty values (like "", 0, null, etc.) are falsy.
//example: falsy values: false, 0, "", null, undefined, NaN



//more examples

const name = "";
if(name){
    console.log("name exists")
}
else{
    console.log("no name provided") //// Output: "No name provided" because empty string "" is falsy

}

// if-else
marks = 75
if(marks >= 90){
    console.log("excellent marks")
}else if(marks >= 70){
    console.log("good marks") //this print
}else if(marks >= 40){
    console.log("just pass")
}else{
    console.log("fail")
}

//Ternary Operator

const age = 20;
const canvote = age>=18 ? "yes" : "no";
console.log("can vote" , canvote)

//switch 
const fruit= "apple";
switch(fruit){
    case "banana":
        console.log("yellow fruit")
        break;
    case "apple":
        console.log( fruit ,"is red and green fruit")
        break
    default:
        console.log("unknown fruit")
    
}

// Truthy / Falsy Check

const input = null
if(input){
    console.log("valid input")
}else{
    console.log("in-valid input") //this run because null is falsy value
}