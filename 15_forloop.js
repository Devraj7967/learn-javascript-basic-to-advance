//A loop is a control structure that allows you to repeat a block of code multiple times, either a fixed number of times or until a condition is no longer true.
// for loop
// for loop is used to iterate over a block of code a number of times 
//Executes a block of code a specified number of times.

//Syntax:

//for (initialization; condition; update) {
   // code to execute
//}

for(let i=0 ; i<5; i++){
    console.log("Hello world")
}

//Sum of Numbers Using for Loop
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("Sum of first 5 numbers is: " , sum)

// Even or Odd Check
for(let i=0 ; i<10; i++){
    if(i%2 == 0){
        console.log(i ," is even")
    }
    else{
        console.log(i , " is odd")
    }
}

//for loop with array
const arr = [1,2,3,4,5]
for(let i=0 ; i<arr.length; i++){
    console.log(arr[i])
}
//break Using – to stop the loop when a condition is met.

for(let i=0 ; i<5; i++){
    const element = i;
    if (element == 3){
        console.log("Found 3")
        break; //exit the loop
    }
    console.log(element)

}

//continue is used to skip an iteration 
for(let i=0 ; i<5; i++){
    const element = i;
    if (element == 3){
        console.log("Found 3")
        continue;   //skip 3 
    }
    console.log(element)

}

//nested for loop
for(let i=1 ; i<5; i++){
    for(let j=1 ; j<5; j++){
        console.log(`i: ${i} j: ${j}`)
    }
}


//for of loop
// for of loop is used to iterate over iterable objects like arrays, strings, etc.
const arr1 = [1,2,3,4,5]
for(let element of arr1){
    console.log(element)
}

let str = "Hello"
for(let char of str){
    console.log(char)
}


//for in loop
// for in loop is used to iterate over the properties of an object and also an arrays.
const obj = {
    name: "John",
    age: 30,
    city: "New York"
}
for(let key in obj){
    console.log("key:" , key , "value:" , obj[key])
}


//notes: in array key by default starts with 0
//for in loop with array
lang = ["js", "py" ,"cpp"]
for(const val in lang){
    console.log(lang[val])
}


//for each
//simple function
const coding = ["js" , 'ruby', "python", "java"]
coding.forEach(function (i){
    console.log(i)

})



//by using arrow function
coding.forEach( (i) => {
    console.log(i)

})

coding.forEach( (i , index, arr) => {
    console.log(i , index, arr)

})

//forEach() with object
const mycoding = [
    {
        languagename : "javascript",
        languagefilename :"js"
    },
    {
        languagename: "java",
        languagefilename : "java"
    },
    {
        languagename: "python",
        languagefilename : "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languagename)

})



//practice questions
//1. print all even number from 1 to 40
for(let i=0; i<=40; i++){
    if(i%2 == 0){
        console.log(i)
    }
}



