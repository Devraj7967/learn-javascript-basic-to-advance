//while loop
//A while loop executes a block of code repeatedly as long as a specified condition is true.
//while (condition) {
  // code block to execute
//}

let i=1;
while(i<=5){
    console.log("Hello world")
    i++
}

//even and odd numbers using while loop
let n=0;
while(n<=20){
    if(n%2 == 0){
        console.log(n ," is even")
    }
    else{
        console.log(n , " is odd")
    }
    n++
}

//calculating sum of first 5 numbers using while loop
let sum = 0;
let j=1;
while(j<=5){
    sum = sum + j;    
    j++

}
console.log("Sum of first 5 numbers is: " , sum)

//do while loop
// do while loop is used to execute a block of code once, and then repeat the loop as long as the condition is true

let k=1;
do{
    console.log("Hello world")
    k++
}while(k<=5);

//sum of first 5 numbers using do while loop
let sum1 = 0;
let l=1;
do{
    sum1 = sum1 + l;    
    l++
}
while(l<=5);
console.log("Sum of first 5 numbers is: " , sum1)